import styles from './grid.module.less';

export const addGrid = () => {
    const grid = document.createElement('div');
    grid.className = styles.grid;
    document.body.appendChild(grid);

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.code === 'KeyG') {
            grid.classList.toggle(styles.grid_visible);
            console.log([...grid.classList]);
        }
    });
}
