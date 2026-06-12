// src/guards/PageGuard.jsx
import Maintenance from "../components/layout/Maintenance"; // Caminho corrigido!

export default function PageGuard({ isUnderMaintenance, children }) {
  if (isUnderMaintenance) {
    return (
      <div className="flex items-center justify-center min-h-[100vh] bg-dark-bg">
        <Maintenance />
      </div>
    );
  }
  return children;
}