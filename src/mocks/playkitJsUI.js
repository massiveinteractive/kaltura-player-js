class Presets {
  static playbackUI() {}
  static idleUI() {}
  static adsUI() {}
  static liveUI() {}
  static errorUI() {}
}

class UIManager {
  buildCustomUI() {}
  buildDefaultUI() {}
  destroy() {}
  setConfig() {}
}

class EventType {}

export {Presets, UIManager, EventType};
