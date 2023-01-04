import styled from "@emotion/styled";

const ButtonBasic = (props) => {
  const {
    type,
    width,
    height,
    border,
    borderRadius,
    background,
    margin,
    padding,
    children,
    _onClick,
    gridArea,
  } = props;

  const styles = {
    width,
    height,
    border,
    borderRadius,
    background,
    margin,
    padding,
    gridArea,
  };

  return (
    <ElBtn {...styles} type={type} onClick={_onClick}>
      {children}
    </ElBtn>
  );
};

export default ButtonBasic;

ButtonBasic.defaultProps = {
  width: "100%",
  height: "2.5rem",
  border: "1px solid #f5f5f5",
  borderRadius: "0.5rem",
  background: "#888",
  margin: "",
  padding: "0.5rem",
  gridArea: "",
  _onClick: () => {},
};

const ElBtn = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  grid-area: ${({ gridArea }) => gridArea};
  cursor: pointer;
`;
