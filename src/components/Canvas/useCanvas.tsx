import { useState } from 'react';
import { DrawTools } from '../../types';

type useCanvasType = {
  ctx: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  imageSrc: string;
  selectedTool: string;
  selectedColor: string;
};

type CustomHookResult = {
  clearCanvas: () => void;
  saveImage: () => void;
  startDraw: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  drawing: (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  handleMouseUp: () => void;
  handleBlur: (e: any) => void;
  setToolSelected: (arg: string) => void;
  toolSelected: string;
  isWriting: boolean;
  prevMouseX: number;
  prevMouseY: number;
};

function useCanvas(initialValue: useCanvasType): CustomHookResult {
  const { ctx, canvas, imageSrc, selectedTool, selectedColor } = initialValue;

  const [isWriting, setIsWriting] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [prevMouseX, setPrevMouseX] = useState<number>(0);
  const [prevMouseY, setPrevMouseY] = useState<number>(0);
  const [brushWidth] = useState<number>(5);
  const [snapshot, setSnapshot] = useState<ImageData>();
  const [fillColor] = useState<boolean>(false);
  const [toolSelected, setToolSelected] = useState('');

  const clearCanvas = () => {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing whole canvas
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.offsetWidth, 700);
      };
      img.src = imageSrc;
      return;
    }
  };

  const saveImage = () => {
    if (canvas) {
      const link = document.createElement('a'); // creating <a> element
      link.download = `${Date.now()}.jpg`; // passing current date as link download value
      link.href = canvas.toDataURL(); // passing canvasData as link href value
      link.click(); // clicking lin
    }
  };

  const startDraw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      selectedTool == DrawTools.Text ? setIsWriting(true) : setIsDrawing(true);
      setPrevMouseX(e.nativeEvent.offsetX); // passing current mouseX position as prevMouseX value
      setPrevMouseY(e.nativeEvent.offsetY); // passing current mouseY position as prevMouseY value
      ctx.beginPath(); // creating new path to draw
      ctx.lineWidth = brushWidth; // passing brushSize as line width
      ctx.strokeStyle = selectedColor; // passing selectedColor as stroke style
      ctx.fillStyle = selectedColor; // passing selectedColor as fill style
      // copying canvas data & passing as snapshot value.. this avoids dragging the image
      const snap = ctx.getImageData(0, 0, canvas!.width, canvas!.height);
      setSnapshot(snap);
    }
  };

  const drawRect = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      // if fillColor isn't checked draw a rect with border else draw rect with background
      if (!fillColor) {
        // creating circle according to the mouse pointer
        return ctx.strokeRect(
          e.nativeEvent.offsetX, //X-coordinate
          e.nativeEvent.offsetY, //Y-coordinate
          prevMouseX - e.nativeEvent.offsetX, //height
          prevMouseY - e.nativeEvent.offsetY //width
        );
      }
      ctx.fillRect(
        e.nativeEvent.offsetX, //X-coordinate
        e.nativeEvent.offsetY, //Y-coordinate
        prevMouseX - e.nativeEvent.offsetX, //height
        prevMouseY - e.nativeEvent.offsetY //width
      );
    }
  };

  const drawCircle = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      ctx.beginPath(); // creating new path to draw circle
      // getting radius for circle according to the mouse pointer
      const radius = Math.sqrt(
        Math.pow(prevMouseX - e.nativeEvent.offsetX, 2) +
          Math.pow(prevMouseY - e.nativeEvent.offsetY, 2)
      );
      //X-coordinate, Y-coordinate, radius, start angle, end angle
      ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
      fillColor ? ctx.fill() : ctx.stroke(); // if fillColor is checked fill circle else draw border circle
    }
  };

  const drawArrow = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      const size = 10;
      const angle = Math.atan2(
        e.nativeEvent.offsetY - prevMouseY,
        e.nativeEvent.offsetX - prevMouseX
      );
      const x2 = e.nativeEvent.offsetX - size * Math.cos(angle - Math.PI / 6);
      const y2 = e.nativeEvent.offsetY - size * Math.sin(angle - Math.PI / 6);
      const x3 = e.nativeEvent.offsetX - size * Math.cos(angle + Math.PI / 6);
      const y3 = e.nativeEvent.offsetY - size * Math.sin(angle + Math.PI / 6);
      ctx.beginPath();
      ctx.moveTo(prevMouseX, prevMouseY);
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.lineTo(x2, y2);
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.lineTo(x3, y3);
      ctx.stroke();
    }
  };

  const drawLine = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      ctx.beginPath(); // creating new path to draw line
      ctx.moveTo(prevMouseX, prevMouseY); // moving line to the previous mouse position
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // creating line to the current mouse position
      ctx.stroke();
    }
  };

  const eraserDraw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (ctx) {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // creating line according to the mouse pointer
      ctx.stroke();
    }
  };

  const drawing = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) return; // if isDrawing is false return from here
    if (ctx && snapshot) {
      ctx.putImageData(snapshot, 0, 0); // adding copied canvas data on to this canvas
      if (selectedTool === DrawTools.Brush) {
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); // creating line according to the mouse pointer
        ctx.stroke(); // drawing/filling line with color
      } else if (selectedTool === DrawTools.Rectangle) {
        drawRect(e);
      } else if (selectedTool === DrawTools.Circle) {
        drawCircle(e);
      } else if (selectedTool === DrawTools.Line) {
        drawLine(e);
      } else if (selectedTool === DrawTools.Arrow) {
        drawArrow(e);
      } else if (selectedTool === DrawTools.Eraser) {
        eraserDraw(e);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    // setToolSelected(DrawTools.Hand);
  };

  const drawText = (text: string) => {
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '24px sans-serif';
      ctx.fillText(text, prevMouseX, prevMouseY);
    }
  };

  const handleBlur: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.keyCode === 13) {
      if (selectedTool === DrawTools.Text && isWriting) {
        const textArea = e.target as HTMLTextAreaElement;
        const currentValue = textArea.value;
        drawText(currentValue);
        setIsWriting(false);
        setToolSelected(DrawTools.Hand);
      }
    }
  };

  return {
    clearCanvas,
    saveImage,
    startDraw,
    drawing,
    handleMouseUp,
    handleBlur,
    setToolSelected,
    toolSelected,
    isWriting,
    prevMouseX,
    prevMouseY,
  };
}

export default useCanvas;
