import SadBadger from "@assets/sad-badger.jpeg";
export function NotFound() {
  return (
    <>
      <div>404 - page not found</div>
      <img src={SadBadger} alt="Sad Badger" />
    </>
  );
}
