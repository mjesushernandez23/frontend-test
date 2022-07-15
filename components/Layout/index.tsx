interface indexProps {
  children: JSX.Element;
}
const index = (props: indexProps) => {
  const { children } = props;
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default index;
