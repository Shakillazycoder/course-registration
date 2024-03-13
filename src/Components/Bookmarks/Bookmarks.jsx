import { totalCredits } from "../../App";

const Bookmarks = ({ bookmarks }) => {
    const credits = bookmarks.reduce((p, c) => p+c.credit,0)
  return (
<div className="card w-96 h-96 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
  <div>
    <h2 className="text-lg text-[#2F80ED] font-bold">Credit Hour Remaining {totalCredits-credits} hr</h2>
    </div>
    <hr />
      <div>
      <h2 className="text-xl text-black font-bold">AddCourse: {bookmarks.length}</h2>
      </div>
      <hr />
      <div>
        <h2 className="text-xl text-black font-bold">Course Name</h2>
        <div>
            <ul className="list-decimal space-y-2 pt-2">
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>{bookmark.name}</li>
                ))}
            </ul>
        </div>
      </div>
        <hr />
        <h2 className="font-semibold">Total Credit Hour : {credits}</h2>
      <hr />
      <h2 className="font-semibold">Total Price : {bookmarks.reduce((p, c) => p+c.price,0)}</h2>
  </div>
</div>
    
  );
};

export default Bookmarks;
