import EntryListItem from './EntryListItem';
type Props = {
  entries: Post[];
};
function EntryList({ entries }: Props) {
  return (
    <div>
      <div className='grid grid-cols-1 gap-y-16'>
        {entries.map(entry => (
          <EntryListItem key={entry._id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export default EntryList;
