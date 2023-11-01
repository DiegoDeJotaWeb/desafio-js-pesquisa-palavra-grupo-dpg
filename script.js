function exist(grid, word) {
  const rows = grid.length;
  const cols = grid[0].length;

  /* 
      r: Representa a coordenada da linha na matriz board. i é usado para rastrear a posição atual na dimensão vertical da matriz.

      c: Representa a coordenada da coluna na matriz board. j é usado para rastrear a posição atual na dimensão horizontal da matriz.

      p: Representa a posição atual na palavra que está sendo procurada. Ele é usado para rastrear o caractere que está sendo comparado na palavra à medida que a busca em profundidade avança.*/

  // Função auxiliar para verificar se a palavra pode ser encontrada a partir de uma posição (r (coordenada da linha na matriz), c (coordenada da coluna na matriz board))
  function dfs(r, c, p) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== word[p]) {
      return false;
    }

    if (p === word.length - 1) {
      return true;
    }

    const originalChar = grid[r][c];
    grid[r][c] = '#'; // Marcar a posição como visitada

    // Verificar recursivamente em todas as direções
 
    const found =
      dfs(r - 1, c, p + 1) ||
      dfs(r + 1, c, p + 1) ||
      dfs(r, c - 1, p + 1) ||
      dfs(r, c + 1, p + 1);

    grid[r][c] = originalChar; // Restaurar o caractere original
    return found;
  }

  // Percorrer a matriz para encontrar a palavra
  for (let r = 0; r < rows; r++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(r, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

const grid = [
  ['O', 'C', 'Q', 'S'],
  ['B', 'D', 'F', 'A']
];

const word = "FADA";

console.log(exist(grid, word)); // Para a palavra 'FADA' deve retornar false   

document.getElementById("result").innerHTML ="Para a palavra '"+ word +"' deve retornar: " + exist(grid, word);