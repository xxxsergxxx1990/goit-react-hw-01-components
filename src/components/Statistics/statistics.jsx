import css from '../Statistics/statistics.module.css';
import propTypes from 'prop-types';



export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.block}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stats}
              key={id}
              
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
