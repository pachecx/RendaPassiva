import { useEffect } from "react";

export const useHashNavigation = () => {
  useEffect(() => {
    // Função para fazer scroll para um elemento por ID
    const scrollToId = (id: string) => {
      if (!id) return;

      // Remove o # do início se existir
      const cleanId = id.replace("#", "");

      // Aguarda um pouco para o DOM estar pronto
      setTimeout(() => {
        const element = document.querySelector(`#${cleanId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    };

    // Faz scroll para o elemento se houver hash na URL quando a página carrega
    const currentHash = window.location.hash;
    if (currentHash) {
      scrollToId(currentHash);
    }

    // Observa mudanças no hash
    const handleHashChange = () => {
      const newHash = window.location.hash;
      scrollToId(newHash);
    };

    // Também observa mudanças no popstate (para browser back/forward)
    const handlePopState = () => {
      const newHash = window.location.hash;
      if (newHash) {
        scrollToId(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
};
