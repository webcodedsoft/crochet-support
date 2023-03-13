import { useState, useEffect } from 'react';

type Interaction = {
  type: string;
  target: EventTarget;
  timestamp: number;
};

const useInteractionTracing = (): Interaction[] => {
  const [interactions, setInteractions] = useState<Interaction[]>([]);

  const handleInteraction = (event: Event) => {
    const { type, target } = event;
    const timestamp = Date.now();

    // Log interaction data
    setInteractions((prevInteractions) => [
      ...prevInteractions,
      { type, target: target as EventTarget, timestamp },
    ]);
  };

  useEffect(() => {
    // Add event listeners for user interactions
    document.addEventListener('click', handleInteraction);
    document.addEventListener('submit', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      // Clean up event listeners
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('submit', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return interactions;
};

export default useInteractionTracing;
