import { useState, useEffect } from 'react';

/**
 * Hook para verificar se a loja está aberta
 * Horário: Segunda a Sexta das 08:00 às 18:00
 */
export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      // Segunda a Sexta (1-5) das 08:00 às 18:00
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
      const isBusinessHours = currentTime >= 8 && currentTime < 18;

      setIsOpen(isWeekday && isBusinessHours);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);

  return isOpen;
}
