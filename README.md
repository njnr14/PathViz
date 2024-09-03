# PathViz



#### [Deployed site](https://pathviz.netlify.app/)

## This project Visualize the pathfinding algorithms like BFS , DFS and Dijkstra's. 

### Directions to use:-
->Create custom maze by clicking on the grid or select function binary maze.<br>
->Select the Algorithm.<br>
->Select the Speed.<br>
->Click on the Start button.<br>


![Screenshot 2024-09-04 002422](https://github.com/user-attachments/assets/31d7bb65-1c7e-44ee-bf6a-1839ea848f2d)

![Screenshot 2024-09-04 002508](https://github.com/user-attachments/assets/1d15887f-e0d9-4533-8fff-7daf770e32ee)

![Screenshot 2024-09-04 002534](https://github.com/user-attachments/assets/587a9cae-efb7-41be-a1ca-80b9537f09d0)

### React + TypeScript + Tailwind

### Get Started From Scratch
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

