export const animateText = () => {
  const textDivs: NodeListOf<HTMLElement> = document.querySelectorAll(".animation-text");
  textDivs.forEach((textDiv: HTMLElement) => {
    textDiv.innerHTML = textDiv.innerText
      .split("")
      .map((char) => `<span class="inline-block char">${char}</span>`)
      .join("");
  });
};