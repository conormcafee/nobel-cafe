export const Snow = () => {
  return [...Array(50).keys()].map((snow) => (
    <div className="snowflake" key={snow}></div>
  ));
};
