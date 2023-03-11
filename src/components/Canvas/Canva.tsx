import React, { useCallback, useEffect, useRef, useState } from 'react';
import './canvas.css';
import { DrawTools } from '../../types';
import { determineCursorType } from '../../utils';
import useCanvas from './useCanvas';

//TODO: Text Selection and drag

type Props = {
  imageSrc: string;
  selectedTool: string;
  selectedColor: string;
};
export default function Canvas({
  imageSrc,
  selectedTool,
  selectedColor,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const {
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
  } = useCanvas({
    canvas,
    ctx,
    imageSrc,
    selectedTool,
    selectedColor,
  });

  useEffect(() => {
    if (selectedTool === DrawTools.Clear) {
      setToolSelected(DrawTools.Hand);
    } else {
      setToolSelected(selectedTool);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (selectedTool === DrawTools.Text || isWriting) {
      const textArea = textAreaRef.current;
      textArea?.focus();
    }
  }, [isWriting, selectedTool]);

  const setCanvasBackground = useCallback(() => {
    // setting whole canvas background to white, so the downloaded img background will be white
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = 700;
    }
  }, [canvas]);

  useEffect(() => {
    if (selectedTool === DrawTools.Clear) {
      clearCanvas();
      setToolSelected(DrawTools.Hand);
    } else if (selectedTool === DrawTools.Download) {
      saveImage();
      return;
    }
  }, [selectedTool]);

  useEffect(() => {
    const canva = canvasRef.current;
    if (canva) {
      setCanvas(canva);
      const context = canva.getContext('2d');
      if (context) {
        setCtx(context);
        setCanvasBackground();
        const img = new Image();
        img.onload = () => {
          // canva.width = img.width;
          // canva.height = img.height;
          context.drawImage(img, 0, 0, canva.offsetWidth, 700);
        };
        img.src = imageSrc;
      }
    }
  }, [canvas, imageSrc, setCanvasBackground]);

  return (
    <div>
      {isWriting && (
        <textarea
          ref={textAreaRef}
          onKeyDown={handleBlur}
          style={{
            position: 'fixed',
            top: prevMouseY - 2,
            left: prevMouseX,
            font: '24px sans-serif',
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            resize: 'both',
            overflow: 'hidden',
            whiteSpace: 'pre',
            background: 'transparent',
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
          cursor: determineCursorType(toolSelected || selectedTool),
        }}
        onMouseMove={drawing}
        onMouseDown={startDraw}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
}
