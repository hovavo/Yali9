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
    CanvasSizeMonitor.callback({ width, height });
  };
}

export default CanvasSizeMonitor;
