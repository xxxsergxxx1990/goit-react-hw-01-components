import css from './friendsList.module.css'
import PropTypes from 'prop-types'




export const FriendsList = ({ friends }) => {
  
  
    return (
      
        <ul className={css.friends__list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={css.friends__item} key={id}>
              <span className={`${css.friends__status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img className={css.avatar} src={avatar} alt={name} />
              <p className={css.friends__name}>{name}</p>
            </li>
          ))}
        </ul>
     
    );
  };
  
  FriendsList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };