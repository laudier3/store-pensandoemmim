import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [history, setHistory] = useState([]);

  // Adicionar nova rota ao histórico quando a URL mudar
  useEffect(() => {
    setHistory((prev) => [...prev, location.pathname]);
  }, [location.pathname]);

  // Voltar para a página anterior
  function goBack() {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove a última página
      navigate(newHistory[newHistory.length - 1]); // Volta para a página anterior
      setHistory(newHistory);
    }
  }

  // Avançar para a próxima página (se houver)
  function goForward(nextPath) {
    navigate(nextPath);
  }

  return (
    <HistoryContext.Provider value={{ goBack, goForward }}>
      {{children}}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
