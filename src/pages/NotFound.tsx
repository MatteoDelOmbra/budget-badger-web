import SadBadger from "@assets/sad-badger.jpeg";
export function NotFound() {
  return (
    <>
      <div>Page not found</div>
      <img src={SadBadger} alt="Sad Badger" />
    </>
  );
}
