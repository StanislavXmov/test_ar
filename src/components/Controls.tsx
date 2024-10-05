import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  RotateCcw,
  RotateCw
} from "lucide-react";
import { usePosition } from "../store/position.store";

export function Controls() {
  const x = usePosition(s => s.x);
  const setX = usePosition(s => s.setX);
  const z = usePosition(s => s.z);
  const setZ = usePosition(s => s.setZ);
  const y = usePosition(s => s.y);
  const setY = usePosition(s => s.setY);
  
  return (
    <div className='buttonsGrid'>
      <button
        className='controlsButton x1'
        onClick={() => setX(x - 0.5)}
      >
        <ArrowLeft />
      </button>
      <button
        className='controlsButton x2'
        onClick={() => setX(x + 0.5)}
      >
        <ArrowRight />
      </button>
      <button
        className='controlsButton z1'
        onClick={() => setZ(z - 0.5)}
      >
        <ArrowUp />
      </button>
      <button
        className='controlsButton z2'
        onClick={() => setZ(z + 0.5)}
      >
        <ArrowDown />
      </button>
      <button
        className='controlsButton y1'
        onClick={() => setY(y + Math.PI / 12 )}
      >
        <RotateCcw />
      </button>
      <button
        className='controlsButton y2'
        onClick={() => setY(y - Math.PI / 12 )}
      >
        <RotateCw />
      </button>
    </div>
  );
}