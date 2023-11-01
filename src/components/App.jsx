import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendsList as FriendListItem } from './Friends/FriendsList';
import { TransactionHistory } from './Transactions/transaction';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendListItem friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
