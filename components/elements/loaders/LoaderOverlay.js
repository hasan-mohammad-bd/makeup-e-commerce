import classes from "./LoaderOverlay.module.css";
const LoaderOverlay = () => {
  return (
    <div className={classes.loaderOverlay}>
      {/* <div className={classes.loaderSpinner}></div> */}
      <div class={classes.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderOverlay;
