import Card from "../UI/Card";
import styles from './UsersList.module.css'

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map(function (user) {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UsersList;