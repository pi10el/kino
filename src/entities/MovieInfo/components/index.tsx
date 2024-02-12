// consts
import { PERSONS } from '@/shared/consts/PERSONS';

// helpers
import { ageColor } from '@/shared/lib/helpers/ageColor';
import { parseType } from '@/shared/lib/helpers/parseType';
import { parseBudget } from '../lib/parseBudget';
import { parseMovieLength } from '../lib/parseMovieLength';
import { parsePersons } from '../lib/parsePersons';

// components
import { Detail } from './Detail';

// styles
import styles from './styles.module.scss';

interface Props {
  info: IMovieInfo;
}

export const MovieInfo = ({ info }: Props) => {
  return (
    <Detail>
      <div className={styles.info || ''}>
        <div className={styles.title}>
          <h1>
            {info.name || info.alternativeName}, {info.year || ''}
            <small>{parseType(info.type)}</small>
          </h1>
          {info.alternativeName ? <h2>{info.alternativeName}</h2> : null}
          {info.description ? <span>{info.description}</span> : null}
        </div>
        <div className={styles.about}>
          <h3>О фильме</h3>
          {info.year && (
            <div>
              <span>Год</span>
              <p>{info.year}</p>
            </div>
          )}
          {info.countries?.length && (
            <div>
              <span>Страна</span>
              <p>{info.countries.map((el) => el.name).join(', ')}</p>
            </div>
          )}
          {info.genres?.length && (
            <div>
              <span>Жанр</span>
              <p>{info.genres.map((el) => el.name).join(', ')}</p>
            </div>
          )}
          {info.movieLength && (
            <div>
              <span>Время</span>
              <p>{parseMovieLength(info.movieLength)}</p>
            </div>
          )}
          {info.ageRating && (
            <div>
              <span>Возраст</span>
              <p style={ageColor(info.ageRating)}>{info.ageRating}+</p>
            </div>
          )}
          {info.budget && info.budget.value && (
            <div>
              <span>Бюджет</span>
              <p>
                {info.budget.currency}
                {parseBudget(info.budget.value)}
              </p>
            </div>
          )}
          {info.fees?.world && info.fees.world.value && (
            <div>
              <span>Сборы в мире</span>
              <p>
                {info.fees.world.currency}
                {parseBudget(info.fees.world.value)}
              </p>
            </div>
          )}
          {info.fees?.russia && info.fees.russia.value && (
            <div>
              <span>Сборы в России</span>
              <p>
                {info.fees.russia.currency}
                {parseBudget(info.fees.russia.value)}
              </p>
            </div>
          )}
          {info.fees?.usa && info.fees.usa.value && (
            <div>
              <span>Сборы в США</span>
              <p>
                {info.fees.usa.currency}
                {parseBudget(info.fees.usa.value)}
              </p>
            </div>
          )}
          {info.slogan && (
            <div>
              <span>Слоган</span>
              <p style={{ opacity: 0.5 }}>{info.slogan}</p>
            </div>
          )}
          {PERSONS.map((person) => {
            return (
              info.persons && (
                <div key={person}>
                  <span>
                    {person[0].toUpperCase()}
                    {person.slice(1)}
                  </span>
                  <p>{parsePersons(info.persons, person)}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </Detail>
  );
};
