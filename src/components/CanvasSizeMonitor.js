class CanvasSizeMonitor {
  static start(window, callback) {
    CanvasSizeMonitor.window = window;
    CanvasSizeMonitor.callback = callback || (() => {});
    CanvasSizeMonitor.window.addEventListener(
      "resize",
      CanvasSizeMonitor.onResize,
      true
    );
  }
  static stop() {
    CanvasSizeMonitor.window.removeEventListener(
      "resize",
      CanvasSizeMonitor.onResize
    );
  }
  static onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const center = {x: width / 2, y: height / 2};
    CanvasSizeMonitor.callback({ width, height, center });
  };
}

export default CanvasSizeMonitor;
