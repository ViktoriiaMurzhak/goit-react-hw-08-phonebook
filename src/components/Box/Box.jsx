import css from './Box.module.css';

export const Box = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};
