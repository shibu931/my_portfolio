'use client'
import { useState, useEffect, useRef } from 'react';

interface Notification {
  message: string; 
}

interface MarqueeProps {
  notifications: Notification[];
  speed?: number; // speed in pixels per second
}

const Marquee: React.FC<MarqueeProps> = ({ notifications, speed = 75 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [extendedNotifications, setExtendedNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      // Triplicate the notifications for a smoother endless loop
      setExtendedNotifications([...notifications, ...notifications, ...notifications]);
    }
  }, [notifications]);

  useEffect(() => {
    if (marqueeRef.current && extendedNotifications.length > 0) {
      const firstItemWidth = marqueeRef.current.children[0].clientWidth;
      const totalWidth = firstItemWidth * extendedNotifications.length;

      const durationInSeconds = totalWidth / speed;
      marqueeRef.current.style.animation = `slide ${durationInSeconds}s linear infinite`;
    }
  }, [extendedNotifications, speed]);

  if (!notifications || notifications.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden w-full h-12 bg-violet-700/10 dark:bg-violet-300/20 rounded">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${33.3333 * notifications.length}%); // 33.33% because we tripled the content
          }
        }
      `}</style>
      <div 
        className="absolute flex whitespace-nowrap"
        ref={marqueeRef}
      >
        {extendedNotifications.map((notification, index) => (
          <div key={index} className="py-2 px-4 h-12 flex text-violet-800 dark:text-violet-300 font-bold items-center">
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;