/*!
 * Google Pacman 
 *
 * Copyright 2010, Google
 *
 * Date: Fri May 21 2010
 */

google.pacman ||
function () {
  var a = true,
    e = false,
    g = {},
    i = [1, 4, 2, 8],
    l = {
      0: {
        axis: 0,
        increment: 0
      },
      1: {
        axis: 0,
        increment: -1
      },
      2: {
        axis: 0,
        increment: +1
      },
      4: {
        axis: 1,
        increment: -1
      },
      8: {
        axis: 1,
        increment: +1
      }
    },
    m = [0, 7, 17, 32],
    n = [{
      x: 5,
      y: 1,
      w: 56
    },
    {
      x: 5,
      y: 4,
      w: 5
    },
    {
      x: 5,
      y: 1,
      h: 4
    },
    {
      x: 9,
      y: 1,
      h: 12
    },
    {
      x: 5,
      y: 12,
      h: 4
    },
    {
      x: 10,
      y: 12,
      h: 4
    },
    {
      x: 5,
      y: 15,
      w: 16
    },
    {
      x: 5,
      y: 12,
      w: 31
    },
    {
      x: 60,
      y: 1,
      h: 4
    },
    {
      x: 54,
      y: 1,
      h: 4
    },
    {
      x: 19,
      y: 1,
      h: 12
    },
    {
      x: 19,
      y: 4,
      w: 26
    },
    {
      x: 13,
      y: 5,
      w: 7
    },
    {
      x: 13,
      y: 5,
      h: 4
    },
    {
      x: 13,
      y: 8,
      w: 3
    },
    {
      x: 56,
      y: 4,
      h: 9
    },
    {
      x: 48,
      y: 4,
      w: 13
    },
    {
      x: 48,
      y: 1,
      h: 12
    },
    {
      x: 60,
      y: 12,
      h: 4
    },
    {
      x: 44,
      y: 15,
      w: 17
    },
    {
      x: 54,
      y: 12,
      h: 4
    },
    {
      x: 44,
      y: 12,
      w: 17
    },
    {
      x: 44,
      y: 1,
      h: 15
    },
    {
      x: 41,
      y: 13,
      w: 4
    },
    {
      x: 41,
      y: 13,
      h: 3
    },
    {
      x: 38,
      y: 13,
      h: 3
    },
    {
      x: 38,
      y: 15,
      w: 4
    },
    {
      x: 35,
      y: 10,
      w: 10
    },
    {
      x: 35,
      y: 1,
      h: 15
    },
    {
      x: 35,
      y: 13,
      w: 4
    },
    {
      x: 21,
      y: 12,
      h: 4
    },
    {
      x: 24,
      y: 12,
      h: 4
    },
    {
      x: 24,
      y: 15,
      w: 12
    },
    {
      x: 27,
      y: 4,
      h: 9
    },
    {
      x: 52,
      y: 9,
      w: 5
    },
    {
      x: 56,
      y: 8,
      w: 10,
      type: 1
    },
    {
      x: 1,
      y: 8,
      w: 9,
      type: 1
    }],
    o = [{
      x: 1,
      y: 8,
      w: 8
    },
    {
      x: 57,
      y: 8,
      w: 9
    },
    {
      x: 44,
      y: 2,
      h: 10
    },
    {
      x: 35,
      y: 5,
      h: 7
    },
    {
      x: 36,
      y: 4,
      w: 8
    },
    {
      x: 36,
      y: 10,
      w: 8
    },
    {
      x: 39,
      y: 15,
      w: 2
    }],
    p = [{
      x: 5,
      y: 15
    },
    {
      x: 5,
      y: 3
    },
    {
      x: 15,
      y: 8
    },
    {
      x: 60,
      y: 3
    },
    {
      x: 60,
      y: 15
    }],
    q = [{
      x: 2,
      y: 8
    },
    {
      x: 63,
      y: 8
    }],
    r = {
      1: [{
        x: 39.5,
        y: 15,
        dir: 4
      },
      {
        x: 39.5,
        y: 4,
        dir: 4,
        scatterX: 57,
        scatterY: -4
      },
      {
        x: 39.5,
        y: 7,
        dir: 2,
        scatterX: 0,
        scatterY: -4
      },
      {
        x: 37.625,
        y: 7,
        dir: 1,
        scatterX: 57,
        scatterY: 20
      },
      {
        x: 41.375,
        y: 7,
        dir: 1,
        scatterX: 0,
        scatterY: 20
      }],
      2: [{
        x: 40.25,
        y: 15,
        dir: 8
      },
      {
        x: 38.75,
        y: 15,
        dir: 4
      },
      {
        x: 39.5,
        y: 4,
        dir: 4,
        scatterX: 57,
        scatterY: -4
      },
      {
        x: 39.5,
        y: 7,
        dir: 2,
        scatterX: 0,
        scatterY: -4
      },
      {
        x: 37.625,
        y: 7,
        dir: 1,
        scatterX: 57,
        scatterY: 20
      },
      {
        x: 41.375,
        y: 7,
        dir: 1,
        scatterX: 0,
        scatterY: 20
      }]
    },
    s = [32, 312],
    v = [80, 312],
    w = {
      0: 0.16,
      1: 0.23,
      2: 1,
      3: 1,
      4: 2.23,
      5: 0.3,
      6: 1.9,
      7: 2.23,
      8: 1.9,
      9: 5,
      10: 1.9,
      11: 1.18,
      12: 0.3,
      13: 0.5,
      14: 1.9,
      15: 9,
      16: 10,
      17: 0.26
    },
    y = 0.8 * 0.4,
    z = [{},
    {
      ghostSpeed: 0.75,
      ghostTunnelSpeed: 0.4,
      playerSpeed: 0.8,
      dotEatingSpeed: 0.71,
      ghostFrightSpeed: 0.5,
      playerFrightSpeed: 0.9,
      dotEatingFrightSpeed: 0.79,
      elroyDotsLeftPart1: 20,
      elroySpeedPart1: 0.8,
      elroyDotsLeftPart2: 10,
      elroySpeedPart2: 0.85,
      frightTime: 6,
      frightBlinkCount: 5,
      fruit: 1,
      fruitScore: 100,
      ghostModeSwitchTimes: [7, 20, 7, 20, 5, 20, 5, 1],
      penForceTime: 4,
      penLeavingLimits: [0, 0, 30, 60]
    },
    {
      ghostSpeed: 0.85,
      ghostTunnelSpeed: 0.45,
      playerSpeed: 0.9,
      dotEatingSpeed: 0.79,
      ghostFrightSpeed: 0.55,
      playerFrightSpeed: 0.95,
      dotEatingFrightSpeed: 0.83,
      elroyDotsLeftPart1: 30,
      elroySpeedPart1: 0.9,
      elroyDotsLeftPart2: 15,
      elroySpeedPart2: 0.95,
      frightTime: 5,
      frightBlinkCount: 5,
      fruit: 2,
      fruitScore: 300,
      ghostModeSwitchTimes: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
      penForceTime: 4,
      penLeavingLimits: [0, 0, 0, 50],
      cutsceneId: 1
    },
    {
      ghostSpeed: 0.85,
      ghostTunnelSpeed: 0.45,
      playerSpeed: 0.9,
      dotEatingSpeed: 0.79,
      ghostFrightSpeed: 0.55,
      playerFrightSpeed: 0.95,
      dotEatingFrightSpeed: 0.83,
      elroyDotsLeftPart1: 40,
      elroySpeedPart1: 0.9,
      elroyDotsLeftPart2: 20,
      elroySpeedPart2: 0.95,
      frightTime: 4,
      frightBlinkCount: 5,
      fruit: 3,
      fruitScore: 500,
      ghostModeSwitchTimes: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
      penForceTime: 4,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.85,
      ghostTunnelSpeed: 0.45,
      playerSpeed: 0.9,
      dotEatingSpeed: 0.79,
      ghostFrightSpeed: 0.55,
      playerFrightSpeed: 0.95,
      dotEatingFrightSpeed: 0.83,
      elroyDotsLeftPart1: 40,
      elroySpeedPart1: 0.9,
      elroyDotsLeftPart2: 20,
      elroySpeedPart2: 0.95,
      frightTime: 3,
      frightBlinkCount: 5,
      fruit: 3,
      fruitScore: 500,
      ghostModeSwitchTimes: [7, 20, 7, 20, 5, 1033, 1 / 60, 1],
      penForceTime: 4,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 40,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 20,
      elroySpeedPart2: 1.05,
      frightTime: 2,
      frightBlinkCount: 5,
      fruit: 4,
      fruitScore: 700,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0],
      cutsceneId: 2
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 50,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 25,
      elroySpeedPart2: 1.05,
      frightTime: 5,
      frightBlinkCount: 5,
      fruit: 4,
      fruitScore: 700,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 50,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 25,
      elroySpeedPart2: 1.05,
      frightTime: 2,
      frightBlinkCount: 5,
      fruit: 5,
      fruitScore: 1E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 50,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 25,
      elroySpeedPart2: 1.05,
      frightTime: 2,
      frightBlinkCount: 5,
      fruit: 5,
      fruitScore: 1E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 60,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 30,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 6,
      fruitScore: 2E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0],
      cutsceneId: 3
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 60,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 30,
      elroySpeedPart2: 1.05,
      frightTime: 5,
      frightBlinkCount: 5,
      fruit: 6,
      fruitScore: 2E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 60,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 30,
      elroySpeedPart2: 1.05,
      frightTime: 2,
      frightBlinkCount: 5,
      fruit: 7,
      fruitScore: 3E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 80,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 40,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 7,
      fruitScore: 3E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 80,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 40,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0],
      cutsceneId: 3
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 80,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 40,
      elroySpeedPart2: 1.05,
      frightTime: 3,
      frightBlinkCount: 5,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 100,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 50,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 100,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 50,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 100,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 50,
      elroySpeedPart2: 1.05,
      frightTime: 0,
      frightBlinkCount: 0,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0],
      cutsceneId: 3
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 100,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 50,
      elroySpeedPart2: 1.05,
      frightTime: 1,
      frightBlinkCount: 3,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 120,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 60,
      elroySpeedPart2: 1.05,
      frightTime: 0,
      frightBlinkCount: 0,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 1,
      dotEatingSpeed: 0.87,
      ghostFrightSpeed: 0.6,
      playerFrightSpeed: 1,
      dotEatingFrightSpeed: 0.87,
      elroyDotsLeftPart1: 120,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 60,
      elroySpeedPart2: 1.05,
      frightTime: 0,
      frightBlinkCount: 0,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    },
    {
      ghostSpeed: 0.95,
      ghostTunnelSpeed: 0.5,
      playerSpeed: 0.9,
      dotEatingSpeed: 0.79,
      ghostFrightSpeed: 0.75,
      playerFrightSpeed: 0.9,
      dotEatingFrightSpeed: 0.79,
      elroyDotsLeftPart1: 120,
      elroySpeedPart1: 1,
      elroyDotsLeftPart2: 60,
      elroySpeedPart2: 1.05,
      frightTime: 0,
      frightBlinkCount: 0,
      fruit: 8,
      fruitScore: 5E3,
      ghostModeSwitchTimes: [5, 20, 5, 20, 5, 1037, 1 / 60, 1],
      penForceTime: 3,
      penLeavingLimits: [0, 0, 0, 0]
    }],
    A = {
      1: [{
        x: 37.6,
        y: 7,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 37.6,
        y: 6.375,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 37.6,
        y: 7.625,
        dir: 1,
        dest: 7,
        speed: 0.48
      }],
      2: [{
        x: 39.5,
        y: 7,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 39.5,
        y: 7.625,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 39.5,
        y: 6.375,
        dir: 2,
        dest: 7,
        speed: 0.48
      }],
      3: [{
        x: 41.4,
        y: 7,
        dir: 1,
        dest: 6.375,
        speed: 0.48
      },
      {
        x: 41.4,
        y: 6.375,
        dir: 2,
        dest: 7.625,
        speed: 0.48
      },
      {
        x: 41.4,
        y: 7.625,
        dir: 1,
        dest: 7,
        speed: 0.48
      }],
      4: [{
        x: 37.6,
        y: 7,
        dir: 8,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      5: [{
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      6: [{
        x: 41.4,
        y: 7,
        dir: 4,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      7: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      },
      {
        x: 39.5,
        y: 7,
        dir: 4,
        dest: 37.625,
        speed: 1.6
      }],
      8: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      }],
      9: [{
        x: 39.5,
        y: 4,
        dir: 2,
        dest: 7,
        speed: 1.6
      },
      {
        x: 39.5,
        y: 7,
        dir: 8,
        dest: 41.375,
        speed: 1.6
      }],
      10: [{
        x: 37.6,
        y: 7,
        dir: 8,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      11: [{
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }],
      12: [{
        x: 41.4,
        y: 7,
        dir: 4,
        dest: 39.5,
        speed: y
      },
      {
        x: 39.5,
        y: 7,
        dir: 1,
        dest: 4,
        speed: y
      }]
    },
    B = {
      1: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 68.2,
          y: 9,
          id: 1
        }],
        sequence: [{
          time: 5.5,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2
          }]
        },
        {
          time: 0.1,
          moves: [{
            dir: 4,
            speed: 32
          },
          {
            dir: 4,
            speed: 0
          }]
        },
        {
          time: 9,
          moves: [{
            dir: 8,
            speed: 0.75 * 0.8 * 2,
            elId: "pcm-bpcm"
          },
          {
            dir: 8,
            speed: 0.8,
            mode: 4
          }]
        }]
      },
      2: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 70.2,
          y: 9,
          id: 1
        },
        {
          ghost: a,
          x: 32,
          y: 9.5,
          id: 2
        }],
        sequence: [{
          time: 2.7,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.1 * 0.8
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1.3,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 1,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0,
            elId: "pcm-ghfa"
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        },
        {
          time: 2.5,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0,
            elId: "pcm-ghfa"
          },
          {
            dir: 0,
            speed: 0,
            elId: "pcm-stck"
          }]
        }]
      },
      3: {
        actors: [{
          ghost: e,
          x: 64,
          y: 9,
          id: 0
        },
        {
          ghost: a,
          x: 70.2,
          y: 9,
          id: 2
        }],
        sequence: [{
          time: 5.3,
          moves: [{
            dir: 4,
            speed: 0.75 * 0.8 * 2
          },
          {
            dir: 4,
            speed: 0.78 * 0.8 * 2,
            elId: "pcm-ghin"
          }]
        },
        {
          time: 5.3,
          moves: [{
            dir: 4,
            speed: 0
          },
          {
            dir: 8,
            speed: 0.78 * 0.8 * 2,
            elId: "pcm-gbug"
          }]
        }]
      }
    },
    C = [90, 45, 30],
    D = C[0];

  function E(b) {
    this.id = b
  }
  E.prototype.A = function () {
    var b = r[g.playerCount][this.id];
    this.pos = [b.y * 8, b.x * 8];
    this.posDelta = [0, 0];
    this.tilePos = [b.y * 8, b.x * 8];
    this.targetPos = [b.scatterY * 8, b.scatterX * 8];
    this.scatterPos = [b.scatterY * 8, b.scatterX * 8];
    this.lastActiveDir = this.dir = b.dir;
    this.physicalSpeed = this.requestedDir = this.nextDir = 0;
    this.c(0);
    this.reverseDirectionsNext = this.freeToLeavePen = this.modeChangedWhileInPen = this.eatenInThisFrightMode = e;
    this.l()
  };
  E.prototype.createElement = function () {
    this.el = document.createElement("div");
    this.el.className = "pcm-ac";
    this.el.id = "actor" + this.id;
    g.prepareElement(this.el, 0, 0);
    g.playfieldEl.appendChild(this.el);
    this.elPos = [0, 0];
    this.elBackgroundPos = [0, 0]
  };
  E.prototype.a = function (b) {
    var c = this.mode;
    this.mode = b;
    if (this.id == g.playerCount + 3 && (b == 16 || c == 16)) g.updateCruiseElroySpeed();
    switch (c) {
    case 32:
      g.ghostExitingPenNow = e;
      break;
    case 8:
      g.ghostEyesCount > 0 && g.ghostEyesCount--;
      g.ghostEyesCount == 0 && g.playAmbientSound();
      break
    }
    switch (b) {
    case 4:
      this.fullSpeed = g.levels.ghostFrightSpeed * 0.8;
      this.tunnelSpeed = g.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine = e;
      break;
    case 1:
      this.fullSpeed = g.levels.ghostSpeed * 0.8;
      this.tunnelSpeed = g.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine =
      e;
      break;
    case 2:
      this.targetPos = this.scatterPos;
      this.fullSpeed = g.levels.ghostSpeed * 0.8;
      this.tunnelSpeed = g.levels.ghostTunnelSpeed * 0.8;
      this.followingRoutine = e;
      break;
    case 8:
      this.tunnelSpeed = this.fullSpeed = 1.6;
      this.targetPos = [s[0], s[1]];
      this.freeToLeavePen = this.followingRoutine = e;
      break;
    case 16:
      this.l();
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case g.playerCount + 1:
        this.routineToFollow = 2;
        break;
      case g.playerCount + 2:
        this.routineToFollow = 1;
        break;
      case g.playerCount + 3:
        this.routineToFollow =
        3;
        break
      }
      break;
    case 32:
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case g.playerCount + 1:
        this.routineToFollow = 5;
        break;
      case g.playerCount + 2:
        this.routineToFollow = 4;
        break;
      case g.playerCount + 3:
        this.routineToFollow = 6;
        break
      }
      g.ghostExitingPenNow = a;
      break;
    case 64:
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case g.playerCount:
      case g.playerCount + 1:
        this.routineToFollow = 8;
        break;
      case g.playerCount + 2:
        this.routineToFollow = 7;
        break;
      case g.playerCount + 3:
        this.routineToFollow = 9;
        break
      }
      break;
    case 128:
      this.followingRoutine = a;
      this.routineMoveId = -1;
      switch (this.id) {
      case g.playerCount:
      case g.playerCount + 1:
        this.routineToFollow = 11;
        break;
      case g.playerCount + 2:
        this.routineToFollow = 10;
        break;
      case g.playerCount + 3:
        this.routineToFollow = 12;
        break
      }
      break
    }
    this.d()
  };
  E.prototype.l = function () {
    if (this.id >= g.playerCount) this.targetPlayerId = Math.floor(g.rand() * g.playerCount)
  };
  E.prototype.z = function (b) {
    if (!g.userDisabledSound) {
      google.pacManSound = a;
      g.updateSoundIcon()
    }
    if (this.dir == g.oppositeDirections[b]) {
      this.dir = b;
      this.posDelta = [0, 0];
      this.currentSpeed != 2 && this.c(0);
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.nextDir = 0
    } else if (this.dir != b) if (this.dir == 0) {
      if (g.playfield[this.pos[0]][this.pos[1]].allowedDir & b) this.dir = b
    } else {
      var c = g.playfield[this.tilePos[0]][this.tilePos[1]];
      if (c && c.allowedDir & b) {
        c = l[this.dir];
        var d = [this.pos[0], this.pos[1]];
        d[c.axis] -= c.increment;
        var f = 0;
        if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 1;
        else {
          d[c.axis] -= c.increment;
          if (d[0] == this.tilePos[0] && d[1] == this.tilePos[1]) f = 2
        }
        if (f) {
          this.dir = b;
          this.pos[0] = this.tilePos[0];
          this.pos[1] = this.tilePos[1];
          c = l[this.dir];
          this.pos[c.axis] += c.increment * f;
          return
        }
      }
      this.nextDir = b;
      this.posDelta = [0, 0]
    }
  };
  E.prototype.i = function (b) {
    var c = this.tilePos,
      d = l[this.dir],
      f = [c[0], c[1]];
    f[d.axis] += d.increment * 8;
    var h = g.playfield[f[0]][f[1]];
    if (b && !h.intersection) h = g.playfield[c[0]][c[1]];
    if (h.intersection) switch (this.mode) {
    case 2:
    case 1:
    case 8:
      if ((this.dir & h.allowedDir) == 0 && h.allowedDir == g.oppositeDirections[this.dir]) this.nextDir = g.oppositeDirections[this.dir];
      else {
        b = 99999999999;
        c = 0;
        for (var j in i) {
          var k = i[j];
          if (h.allowedDir & k && this.dir != g.oppositeDirections[k]) {
            d = l[k];
            var x = [f[0], f[1]];
            x[d.axis] += d.increment;
            d = g.getDistance(x, [this.targetPos[0], this.targetPos[1]]);
            if (d < b) {
              b = d;
              c = k
            }
          }
        }
        if (c) this.nextDir = c
      }
      break;
    case 4:
      if ((this.dir & h.allowedDir) == 0 && h.allowedDir == g.oppositeDirections[this.dir]) this.nextDir = g.oppositeDirections[this.dir];
      else {
        do f = i[Math.floor(g.rand() * 4)];
        while ((f & h.allowedDir) == 0 || f == g.oppositeDirections[this.dir]);
        this.nextDir = f
      }
      break
    }
  };
  E.prototype.p = function (b) {
    g.tilesChanged = a;
    if (this.reverseDirectionsNext) {
      this.dir = g.oppositeDirections[this.dir];
      this.nextDir = 0;
      this.reverseDirectionsNext = e;
      this.i(a)
    }
    if (!this.ghost && !g.playfield[b[0]][b[1]].path) {
      this.pos[0] = this.lastGoodTilePos[0];
      this.pos[1] = this.lastGoodTilePos[1];
      b[0] = this.lastGoodTilePos[0];
      b[1] = this.lastGoodTilePos[1];
      this.dir = 0
    } else this.lastGoodTilePos = [b[0], b[1]];
    g.playfield[b[0]][b[1]].type == 1 && this.mode != 8 ? this.c(2) : this.c(0);
    !this.ghost && g.playfield[b[0]][b[1]].dot && g.dotEaten(this.id, b);
    this.tilePos[0] = b[0];
    this.tilePos[1] = b[1]
  };
  E.prototype.t = function () {
    var b = this.tilePos;
    switch (this.dir) {
    case 1:
      var c = [b[0], b[1]],
        d = [b[0] + 3.6, b[1]];
      break;
    case 2:
      c = [b[0] - 4, b[1]];
      d = [b[0], b[1]];
      break;
    case 4:
      c = [b[0], b[1]];
      d = [b[0], b[1] + 3.6];
      break;
    case 8:
      c = [b[0], b[1] - 4];
      d = [b[0], b[1]];
      break
    }
    if (this.pos[0] >= c[0] && this.pos[0] <= d[0] && this.pos[1] >= c[1] && this.pos[1] <= d[1]) {
      b = l[this.nextDir];
      this.posDelta[b.axis] += b.increment
    }
  };
  E.prototype.n = function () {
    if (this.pos[0] == q[0].y * 8 && this.pos[1] == q[0].x * 8) {
      this.pos[0] = q[1].y * 8;
      this.pos[1] = (q[1].x - 1) * 8
    } else if (this.pos[0] == q[1].y * 8 && this.pos[1] == q[1].x * 8) {
      this.pos[0] = q[0].y * 8;
      this.pos[1] = (q[0].x + 1) * 8
    }
    this.mode == 8 && this.pos[0] == s[0] && this.pos[1] == s[1] && this.a(64);
    if (!this.ghost && this.pos[0] == v[0] && (this.pos[1] == v[1] || this.pos[1] == v[1] + 8)) g.eatFruit(this.id)
  };
  E.prototype.u = function () {
    this.n();
    this.ghost && this.i(e);
    var b = g.playfield[this.pos[0]][this.pos[1]];
    if (b.intersection) if (this.nextDir && this.nextDir & b.allowedDir) {
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.dir = this.nextDir;
      this.nextDir = 0;
      if (!this.ghost) {
        this.pos[0] += this.posDelta[0];
        this.pos[1] += this.posDelta[1];
        this.posDelta = [0, 0]
      }
    } else if ((this.dir & b.allowedDir) == 0) {
      if (this.dir != 0) this.lastActiveDir = this.dir;
      this.nextDir = this.dir = 0;
      this.c(0)
    }
  };
  E.prototype.o = function () {
    var b = this.pos[0] / 8,
      c = this.pos[1] / 8,
      d = [Math.round(b) * 8, Math.round(c) * 8];
    if (d[0] != this.tilePos[0] || d[1] != this.tilePos[1]) this.p(d);
    else {
      b = [Math.floor(b) * 8, Math.floor(c) * 8];
      this.pos[1] == b[1] && this.pos[0] == b[0] && this.u()
    }!this.ghost && this.nextDir && g.playfield[d[0]][d[1]].intersection && this.nextDir & g.playfield[d[0]][d[1]].allowedDir && this.t()
  };
  E.prototype.B = function () {
    if (this.id == g.playerCount && g.dotsRemaining < g.levels.elroyDotsLeftPart1 && this.mode == 2 && (!g.lostLifeOnThisLevel || g.actors[g.playerCount + 3].mode != 16)) {
      var b = g.actors[this.targetPlayerId];
      this.targetPos = [b.tilePos[0], b.tilePos[1]]
    } else if (this.ghost && this.mode == 1) {
      b = g.actors[this.targetPlayerId];
      switch (this.id) {
      case g.playerCount:
        this.targetPos = [b.tilePos[0], b.tilePos[1]];
        break;
      case g.playerCount + 1:
        this.targetPos = [b.tilePos[0], b.tilePos[1]];
        var c = l[b.dir];
        this.targetPos[c.axis] += 32 * c.increment;
        if (b.dir == 1) this.targetPos[1] -= 32;
        break;
      case g.playerCount + 2:
        var d = g.actors[g.playerCount],
          f = [b.tilePos[0], b.tilePos[1]];
        c = l[b.dir];
        f[c.axis] += 16 * c.increment;
        if (b.dir == 1) f[1] -= 16;
        this.targetPos[0] = f[0] * 2 - d.tilePos[0];
        this.targetPos[1] = f[1] * 2 - d.tilePos[1];
        break;
      case g.playerCount + 3:
        c = g.getDistance(b.tilePos, this.tilePos);
        this.targetPos = c > 64 ? [b.tilePos[0], b.tilePos[1]] : this.scatterPos;
        break
      }
    }
  };
  E.prototype.v = function () {
    this.routineMoveId++;
    if (this.routineMoveId == A[this.routineToFollow].length) if (this.mode == 16 && this.freeToLeavePen && !g.ghostExitingPenNow) {
      this.eatenInThisFrightMode ? this.a(128) : this.a(32);
      return
    } else if (this.mode == 32 || this.mode == 128) {
      this.pos = [s[0], s[1] + 4];
      this.dir = this.modeChangedWhileInPen ? 8 : 4;
      var b = g.mainGhostMode;
      if (this.mode == 128 && b == 4) b = g.lastMainGhostMode;
      this.a(b);
      return
    } else if (this.mode == 64) {
      if (this.id == g.playerCount || this.freeToLeavePen) this.a(128);
      else {
        this.eatenInThisFrightMode =
        a;
        this.a(16)
      }
      return
    } else this.routineMoveId = 0;
    b = A[this.routineToFollow][this.routineMoveId];
    this.pos[0] = b.y * 8;
    this.pos[1] = b.x * 8;
    this.dir = b.dir;
    this.physicalSpeed = 0;
    this.speedIntervals = g.getSpeedIntervals(b.speed);
    this.proceedToNextRoutineMove = e;
    this.b()
  };
  E.prototype.m = function () {
    var b = A[this.routineToFollow][this.routineMoveId];
    if (b) if (this.speedIntervals[g.intervalTime]) {
      var c = l[this.dir];
      this.pos[c.axis] += c.increment;
      switch (this.dir) {
      case 1:
      case 4:
        if (this.pos[c.axis] < b.dest * 8) {
          this.pos[c.axis] = b.dest * 8;
          this.proceedToNextRoutineMove = a
        }
        break;
      case 2:
      case 8:
        if (this.pos[c.axis] > b.dest * 8) {
          this.pos[c.axis] = b.dest * 8;
          this.proceedToNextRoutineMove = a
        }
        break
      }
      this.b()
    }
  };
  E.prototype.j = function () {
    if (this.routineMoveId == -1 || this.proceedToNextRoutineMove) this.v();
    this.m()
  };
  E.prototype.d = function () {
    switch (this.currentSpeed) {
    case 0:
      var b = this.id == g.playerCount && (this.mode == 2 || this.mode == 1) ? g.cruiseElroySpeed : this.fullSpeed;
      break;
    case 1:
      b = this.dotEatingSpeed;
      break;
    case 2:
      b = this.tunnelSpeed;
      break
    }
    if (this.physicalSpeed != b) {
      this.physicalSpeed = b;
      this.speedIntervals = g.getSpeedIntervals(this.physicalSpeed)
    }
  };
  E.prototype.c = function (b) {
    this.currentSpeed = b;
    this.d()
  };
  E.prototype.e = function () {
    if (this.dir) if (this.speedIntervals[g.intervalTime]) {
      var b = l[this.dir];
      this.pos[b.axis] += b.increment;
      this.o();
      this.b()
    }
  };
  E.prototype.move = function () {
    if (g.gameplayMode == 0 || this.ghost && g.gameplayMode == 1 && (this.mode == 8 || this.mode == 64)) {
      if (this.requestedDir != 0) {
        this.z(this.requestedDir);
        this.requestedDir = 0
      }
      if (this.followingRoutine) {
        this.j();
        this.mode == 64 && this.j()
      } else {
        this.e();
        this.mode == 8 && this.e()
      }
    }
  };
  E.prototype.k = function () {
    var b = g.getPlayfieldX(this.pos[1] + this.posDelta[1]),
      c = g.getPlayfieldY(this.pos[0] + this.posDelta[0]);
    if (this.elPos[0] != c || this.elPos[1] != b) {
      this.elPos[0] = c;
      this.elPos[1] = b;
      this.el.style.left = b + "px";
      this.el.style.top = c + "px"
    }
  };
  E.prototype.s = function () {
    var b = 0,
      c = 0,
      d = this.dir;
    if (d == 0) d = this.lastActiveDir;
    if (g.gameplayMode == 1 && this.id == g.playerEatingGhostId) {
      b = 3;
      c = 0
    } else if ((g.gameplayMode == 9 || g.gameplayMode == 10) && this.id == 0) {
      b = 2;
      c = 0
    } else if (g.gameplayMode == 4 || g.gameplayMode == 5 || g.gameplayMode == 7) {
      b = this.id == 0 ? 2 : 4;
      c = 0
    } else if (g.gameplayMode == 3) if (this.id == g.playerDyingId) {
      d = 20 - Math.floor(g.gameplayModeTime / g.timing[4] * 21);
      if (this.id == 0) {
        b = d - 1;
        switch (b) {
        case -1:
          b = 0;
          break;
        case 11:
          b = 10;
          break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
          b =
          11;
          break
        }
        c = 12
      } else switch (d) {
      case 0:
      case 1:
      case 2:
      case 6:
      case 10:
        b = 4;
        c = 3;
        break;
      case 3:
      case 7:
      case 11:
        b = 4;
        c = 0;
        break;
      case 4:
      case 8:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        b = 4;
        c = 2;
        break;
      case 5:
      case 9:
        b = 4;
        c = 1;
        break
      }
    } else {
      b = 3;
      c = 0
    } else if (this.el.id == "pcm-bpcm") {
      b = 14;
      c = 0;
      d = Math.floor(g.globalTime * 0.2) % 4;
      if (d == 3) d = 1;
      c += 2 * d
    } else {
      switch (d) {
      case 4:
        c = 0;
        break;
      case 8:
        c = 1;
        break;
      case 1:
        c = 2;
        break;
      case 2:
        c = 3;
        break
      }
      if (g.gameplayMode != 2) b = Math.floor(g.globalTime * 0.3) % 4;
      if (b == 3 && this.dir == 0) b = 0;
      if (b == 2 && this.id == 0) b = 0;
      if (b == 3) {
        b = 2;
        if (this.id == 0) c = 0
      }
      if (this.id == 1) b += 4
    }
    return [c, b]
  };
  E.prototype.r = function () {
    var b = 0,
      c = 0;
    if (g.gameplayMode == 10 || g.gameplayMode == 4 || g.gameplayMode == 3) {
      b = 3;
      c = 0
    } else if (g.gameplayMode == 1 && this.id == g.ghostBeingEatenId) {
      switch (g.modeScoreMultiplier) {
      case 2:
        b = 0;
        break;
      case 4:
        b = 1;
        break;
      case 8:
        b = 2;
        break;
      case 16:
        b = 3;
        break
      }
      c = 11;
      this.el.className = "pcm-ac pcm-n"
    } else if (this.mode == 4 || (this.mode == 16 || this.mode == 32) && g.mainGhostMode == 4 && !this.eatenInThisFrightMode) {
      b = 0;
      c = 8;
      if (g.frightModeTime < g.levels.frightTotalTime - g.levels.frightTime && Math.floor(g.frightModeTime / g.timing[1]) % 2 == 0) b += 2;
      b += Math.floor(g.globalTime / 16) % 2
    } else if (this.mode == 8 || this.mode == 64) {
      c = this.nextDir;
      if (!c) c = this.dir;
      switch (c) {
      case 4:
        b = 2;
        break;
      case 8:
        b = 3;
        break;
      case 1:
        b = 0;
        break;
      case 2:
        b = 1;
        break
      }
      c = 10
    } else if (this.el.id == "pcm-ghin") {
      b = 6;
      c = 8;
      b += Math.floor(g.globalTime / 16) % 2
    } else if (this.el.id == "pcm-gbug") {
      b = 6;
      c = 9;
      c += Math.floor(g.globalTime / 16) % 2
    } else if (this.el.id == "pcm-ghfa") {
      b = g.cutsceneSequenceId == 3 ? 6 : 7;
      c = 11
    } else if (this.el.id == "pcm-stck") {
      b = g.cutsceneSequenceId == 1 ? g.cutsceneTime > 60 ? 1 : g.cutsceneTime > 45 ? 2 : 3 : g.cutsceneSequenceId == 2 ? 3 : g.cutsceneSequenceId == 3 || g.cutsceneSequenceId == 4 ? 4 : 0;
      c = 13
    } else {
      c = this.nextDir;
      if (!c || g.playfield[this.tilePos[0]][this.tilePos[1]].type == 1) c = this.dir;
      switch (c) {
      case 4:
        b = 4;
        break;
      case 8:
        b = 6;
        break;
      case 1:
        b = 0;
        break;
      case 2:
        b = 2;
        break
      }
      c = 4 + this.id - g.playerCount;
      if (this.speed > 0 || g.gameplayMode != 13) b += Math.floor(g.globalTime / 16) % 2
    }
    return [c, b]
  };
  E.prototype.b = function () {
    this.k();
    var b = [0, 0];
    b = g.gameplayMode == 8 || g.gameplayMode == 14 ? [0, 3] : this.ghost ? this.r() : this.s();
    if (this.elBackgroundPos[0] != b[0] || this.elBackgroundPos[1] != b[1]) {
      this.elBackgroundPos[0] = b[0];
      this.elBackgroundPos[1] = b[1];
      b[0] *= 16;
      b[1] *= 16;
      g.changeElementBkPos(this.el, b[1], b[0], a)
    }
  };
  g.rand = function () {
    var b = 4294967296,
      c = 134775813;
    c = c * g.randSeed + 1;
    return (g.randSeed = c % b) / b
  };
  g.seed = function (b) {
    g.randSeed = b
  };
  g.getDistance = function (b, c) {
    return Math.sqrt((c[1] - b[1]) * (c[1] - b[1]) + (c[0] - b[0]) * (c[0] - b[0]))
  };
  g.getPlayfieldX = function (b) {
    return b + -32
  };
  g.getPlayfieldY = function (b) {
    return b + 0
  };
  g.getCorrectedSpritePos = function (b) {
    return b / 8 * 10 + 2
  };
  g.getDotElementId = function (b, c) {
    return "pcm-d" + b + "-" + c
  };
  g.showElementById = function (b, c) {
    var d = document.getElementById(b);
    if (d) d.style.visibility = c ? "visible" : "hidden"
  };
  g.getAbsoluteElPos = function (b) {
    var c = [0, 0];
    do {
      c[0] += b.offsetTop;
      c[1] += b.offsetLeft
    } while (b = b.offsetParent);
    return c
  };
  g.prepareElement = function (b, c, d) {
    c = g.getCorrectedSpritePos(parseInt(c, 10));
    d = g.getCorrectedSpritePos(parseInt(d, 10));
    if (g.useCss) {
      b.style.backgroundImage = "url(src/pacman10-hp-sprite-2.png)";
      b.style.backgroundPosition = -c + "px " + -d + "px";
      b.style.backgroundRepeat = "no-repeat"
    } else {
      b.style.overflow = "hidden";
      c = "display: block; position: relative; left: " + -c + "px; top: " + -d + "px";
      b.innerHTML = '<img style="' + c + '" src="src/pacman10-hp-sprite-2.png">'
    }
  };
  g.changeElementBkPos = function (b, c, d, f) {
    if (f) {
      c = g.getCorrectedSpritePos(c);
      d = g.getCorrectedSpritePos(d)
    }
    if (g.useCss) b.style.backgroundPosition = -c + "px " + -d + "px";
    else if (b.childNodes[0]) {
      b.childNodes[0].style.left = -c + "px";
      b.childNodes[0].style.top = -d + "px"
    }
  };
  g.determinePlayfieldDimensions = function () {
    g.playfieldWidth = 0;
    g.playfieldHeight = 0;
    for (var b in n) {
      var c = n[b];
      if (c.w) {
        c = c.x + c.w - 1;
        if (c > g.playfieldWidth) g.playfieldWidth = c
      } else {
        c = c.y + c.h - 1;
        if (c > g.playfieldHeight) g.playfieldHeight = c
      }
    }
  };
  g.preparePlayfield = function () {
    g.playfield = [];
    for (var b = 0; b <= g.playfieldHeight + 1; b++) {
      g.playfield[b * 8] = [];
      for (var c = -2; c <= g.playfieldWidth + 1; c++) g.playfield[b * 8][c * 8] = {
        path: 0,
        dot: 0,
        intersection: 0
      }
    }
  };
  g.preparePaths = function () {
    for (var b in n) {
      var c = n[b],
        d = c.type;
      if (c.w) {
        for (var f = c.y * 8, h = c.x * 8; h <= (c.x + c.w - 1) * 8; h += 8) {
          g.playfield[f][h].path = a;
          if (g.playfield[f][h].dot == 0) {
            g.playfield[f][h].dot = 1;
            g.dotsRemaining++
          }
          g.playfield[f][h].type = !d || h != c.x * 8 && h != (c.x + c.w - 1) * 8 ? d : 0
        }
        g.playfield[f][c.x * 8].intersection = a;
        g.playfield[f][(c.x + c.w - 1) * 8].intersection = a
      } else {
        h = c.x * 8;
        for (f = c.y * 8; f <= (c.y + c.h - 1) * 8; f += 8) {
          if (g.playfield[f][h].path) g.playfield[f][h].intersection = a;
          g.playfield[f][h].path = a;
          if (g.playfield[f][h].dot == 0) {
            g.playfield[f][h].dot = 1;
            g.dotsRemaining++
          }
          g.playfield[f][h].type = !d || f != c.y * 8 && f != (c.y + c.h - 1) * 8 ? d : 0
        }
        g.playfield[c.y * 8][h].intersection = a;
        g.playfield[(c.y + c.h - 1) * 8][h].intersection = a
      }
    }
    for (b in o) if (o[b].w) for (h = o[b].x * 8; h <= (o[b].x + o[b].w - 1) * 8; h += 8) {
      g.playfield[o[b].y * 8][h].dot = 0;
      g.dotsRemaining--
    } else for (f = o[b].y * 8; f <= (o[b].y + o[b].h - 1) * 8; f += 8) {
      g.playfield[f][o[b].x * 8].dot = 0;
      g.dotsRemaining--
    }
  };
  g.prepareAllowedDirections = function () {
    for (var b = 8; b <= g.playfieldHeight * 8; b += 8) for (var c = 8; c <= g.playfieldWidth * 8; c += 8) {
      g.playfield[b][c].allowedDir = 0;
      if (g.playfield[b - 8][c].path) g.playfield[b][c].allowedDir += 1;
      if (g.playfield[b + 8][c].path) g.playfield[b][c].allowedDir += 2;
      if (g.playfield[b][c - 8].path) g.playfield[b][c].allowedDir += 4;
      if (g.playfield[b][c + 8].path) g.playfield[b][c].allowedDir += 8
    }
  };
  g.createDotElements = function () {
    for (var b = 8; b <= g.playfieldHeight * 8; b += 8) for (var c = 8; c <= g.playfieldWidth * 8; c += 8) if (g.playfield[b][c].dot) {
      var d = document.createElement("div");
      d.className = "pcm-d";
      d.id = g.getDotElementId(b, c);
      d.style.left = c + -32 + "px";
      d.style.top = b + 0 + "px";
      g.playfieldEl.appendChild(d)
    }
  };
  g.createEnergizerElements = function () {
    for (var b in p) {
      var c = p[b],
        d = g.getDotElementId(c.y * 8, c.x * 8);
      document.getElementById(d).className = "pcm-e";
      g.prepareElement(document.getElementById(d), 0, 144);
      g.playfield[c.y * 8][c.x * 8].dot = 2
    }
  };
  g.createFruitElement = function () {
    g.fruitEl = document.createElement("div");
    g.fruitEl.id = "pcm-f";
    g.fruitEl.style.left = g.getPlayfieldX(v[1]) + "px";
    g.fruitEl.style.top = g.getPlayfieldY(v[0]) + "px";
    g.prepareElement(g.fruitEl, -32, -16);
    g.playfieldEl.appendChild(g.fruitEl)
  };
  g.createPlayfieldElements = function () {
    g.doorEl = document.createElement("div");
    g.doorEl.id = "pcm-do";
    g.doorEl.style.display = "none";
    g.playfieldEl.appendChild(g.doorEl);
    g.createDotElements();
    g.createEnergizerElements();
    g.createFruitElement()
  };
  g.createActors = function () {
    g.actors = [];
    for (var b = 0; b < g.playerCount + 4; b++) {
      g.actors[b] = new E(b);
      if (b < g.playerCount) {
        g.actors[b].ghost = e;
        g.actors[b].mode = 1
      } else g.actors[b].ghost = a
    }
  };
  g.restartActors = function () {
    for (var b in g.actors) g.actors[b].A()
  };
  g.createActorElements = function () {
    for (var b in g.actors) g.actors[b].createElement()
  };
  g.createPlayfield = function () {
    g.playfieldEl = document.createElement("div");
    g.playfieldEl.id = "pcm-p";
    g.canvasEl.appendChild(g.playfieldEl)
  };
  g.resetPlayfield = function () {
    g.dotsRemaining = 0;
    g.dotsEaten = 0;
    g.playfieldEl.innerHTML = "";
    g.prepareElement(g.playfieldEl, 256, 0);
    g.determinePlayfieldDimensions();
    g.preparePlayfield();
    g.preparePaths();
    g.prepareAllowedDirections();
    g.createPlayfieldElements();
    g.createActorElements()
  };
  g.keyPressed = function (b) {
    var c = e;
    switch (b) {
    case 37:
      g.actors[0].requestedDir = 4;
      c = a;
      break;
    case 38:
      g.actors[0].requestedDir = 1;
      c = a;
      break;
    case 39:
      g.actors[0].requestedDir = 8;
      c = a;
      break;
    case 40:
      g.actors[0].requestedDir = 2;
      c = a;
      break;
    case 65:
      if (g.playerCount == 2) {
        g.actors[1].requestedDir = 4;
        c = a
      }
      break;
    case 83:
      if (g.playerCount == 2) {
        g.actors[1].requestedDir = 2;
        c = a
      }
      break;
    case 68:
      if (g.playerCount == 2) {
        g.actors[1].requestedDir = 8;
        c = a
      }
      break;
    case 87:
      if (g.playerCount == 2) {
        g.actors[1].requestedDir = 1;
        c = a
      }
      break
    }
    return c
  };
  g.handleKeyDown = function (b) {
    if (!b) b = window.event;
    if (g.keyPressed(b.keyCode)) if (b.preventDefault) b.preventDefault();
    else b.returnValue = e
  };
  g.canvasClicked = function (b, c) {
    var d = g.getAbsoluteElPos(g.canvasEl);
    b -= d[1] - -32;
    c -= d[0] - 0;
    d = g.actors[0];
    var f = g.getPlayfieldX(d.pos[1] + d.posDelta[1]) + 16,
      h = g.getPlayfieldY(d.pos[0] + d.posDelta[0]) + 32,
      j = Math.abs(b - f),
      k = Math.abs(c - h);
    if (j > 8 && k < j) d.requestedDir = b > f ? 8 : 4;
    else if (k > 8 && j < k) d.requestedDir = c > h ? 2 : 1
  };
  g.handleClick = function (b) {
    if (!b) b = window.event;
    g.canvasClicked(b.clientX, b.clientY)
  };
  g.registerTouch = function () {
    document.body.addEventListener("touchstart", g.handleTouchStart, a);
    g.canvasEl.addEventListener("touchstart", g.handleTouchStart, a);
    document.f && document.f.q && document.f.q.addEventListener("touchstart", g.handleTouchStart, a)
  };
  g.handleTouchStart = function (b) {
    g.touchDX = 0;
    g.touchDY = 0;
    if (b.touches.length == 1) {
      g.touchStartX = b.touches[0].pageX;
      g.touchStartY = b.touches[0].pageY;
      document.body.addEventListener("touchmove", g.handleTouchMove, a);
      document.body.addEventListener("touchend", g.handleTouchEnd, a)
    }
    b.preventDefault();
    b.stopPropagation()
  };
  g.handleTouchMove = function (b) {
    if (b.touches.length > 1) g.cancelTouch();
    else {
      g.touchDX = b.touches[0].pageX - g.touchStartX;
      g.touchDY = b.touches[0].pageY - g.touchStartY
    }
    b.preventDefault();
    b.stopPropagation()
  };
  g.handleTouchEnd = function (b) {
    if (g.touchDX == 0 && g.touchDY == 0) g.canvasClicked(g.touchStartX, g.touchStartY);
    else {
      var c = Math.abs(g.touchDX),
        d = Math.abs(g.touchDY);
      if (c < 8 && d < 8) g.canvasClicked(g.touchStartX, g.touchStartY);
      else if (c > 15 && d < c * 2 / 3) g.actors[0].requestedDir = g.touchDX > 0 ? 8 : 4;
      else if (d > 15 && c < d * 2 / 3) g.actors[0].requestedDir = g.touchDY > 0 ? 2 : 1
    }
    b.preventDefault();
    b.stopPropagation();
    g.cancelTouch()
  };
  g.cancelTouch = function () {
    document.body.removeEventListener("touchmove", g.handleTouchMove, a);
    document.body.removeEventListener("touchend", g.handleTouchEnd, a);
    g.touchStartX = null;
    g.touchStartY = null
  };
  g.addEventListeners = function () {
    if (window.addEventListener) {
      window.addEventListener("keydown", g.handleKeyDown, e);
      g.canvasEl.addEventListener("click", g.handleClick, e);
      g.registerTouch()
    } else {
      document.body.attachEvent("onkeydown", g.handleKeyDown);
      g.canvasEl.attachEvent("onclick", g.handleClick)
    }
  };
  g.startGameplay = function () {
    g.score = [0, 0];
    g.extraLifeAwarded = [e, e];
    g.lives = 3;
    g.level = 0;
    g.paused = e;
    g.globalTime = 0;
    g.newLevel(a)
  };
  g.restartGameplay = function (b) {
    g.seed(0);
    g.frightModeTime = 0;
    g.intervalTime = 0;
    g.gameplayModeTime = 0;
    g.fruitTime = 0;
    g.ghostModeSwitchPos = 0;
    g.ghostModeTime = g.levels.ghostModeSwitchTimes[0] * D;
    g.ghostExitingPenNow = e;
    g.ghostEyesCount = 0;
    g.tilesChanged = e;
    g.updateCruiseElroySpeed();
    g.hideFruit();
    g.resetForcePenLeaveTime();
    g.restartActors();
    g.updateActorPositions();
    g.switchMainGhostMode(2, a);
    for (var c = g.playerCount + 1; c < g.playerCount + 4; c++) g.actors[c].a(16);
    g.dotEatingChannel = [0, 0];
    g.dotEatingSoundPart = [1, 1];
    g.clearDotEatingNow();
    b ? g.changeGameplayMode(4) : g.changeGameplayMode(6)
  };
  g.initiateDoubleMode = function () {
    if (g.playerCount != 2) {
      g.stopAllAudio();
      g.changeGameplayMode(12)
    }
  };
  g.newGame = function () {
    g.playerCount = 1;
    g.createChrome();
    g.createPlayfield();
    g.createActors();
    g.startGameplay()
  };
  g.switchToDoubleMode = function () {
    g.playerCount = 2;
    g.createChrome();
    g.createPlayfield();
    g.createActors();
    g.startGameplay()
  };
  g.insertCoin = function () {
    g.gameplayMode == 8 || g.gameplayMode == 14 ? g.newGame() : g.initiateDoubleMode()
  };
  g.createKillScreenElement = function (b, c, d, f, h) {
    var j = document.createElement("div");
    j.style.left = b + "px";
    j.style.top = c + "px";
    j.style.width = d + "px";
    j.style.height = f + "px";
    j.style.zIndex = 119;
    if (h) {
      j.style.background = "url(src/pacman10-hp-sprite-2.png) -" + g.killScreenTileX + "px -" + g.killScreenTileY + "px no-repeat";
      g.killScreenTileY += 8
    } else j.style.background = "black";
    g.playfieldEl.appendChild(j)
  };
  g.killScreen = function () {
    g.seed(0);
    g.canvasEl.style.visibility = "";
    g.createKillScreenElement(272, 0, 200, 80, e);
    g.createKillScreenElement(280, 80, 192, 56, e);
    g.killScreenTileX = 80;
    g.killScreenTileY = 0;
    for (var b = 280; b <= 472; b += 8) for (var c = 0; c <= 136; c += 8) {
      if (g.rand() < 0.03) {
        g.killScreenTileX = Math.floor(g.rand() * 25) * 10;
        g.killScreenTileY = Math.floor(g.rand() * 2) * 10
      }
      g.createKillScreenElement(b, c, 8, 8, a)
    }
    g.changeGameplayMode(14)
  };
  g.newLevel = function (b) {
    g.level++;
    g.levels = g.level >= z.length ? z[z.length - 1] : z[g.level];
    // start issue 14: Ghosts stay blue permanently on restart
    if ((g.levels.frightTime > 0) && (g.levels.frightTime <= 6))
      g.levels.frightTime = Math.round(g.levels.frightTime * D);
    // end issue 14
    g.levels.frightTotalTime = g.levels.frightTime + g.timing[1] * (g.levels.frightBlinkCount * 2 - 1);
    for (var c in g.actors) g.actors[c].dotCount = 0;
    g.alternatePenLeavingScheme = e;
    g.lostLifeOnThisLevel = e;
    g.updateChrome();
    g.resetPlayfield();
    g.restartGameplay(b);
    g.level == 256 && g.killScreen()
  };
  g.newLife = function () {
    g.lostLifeOnThisLevel = a;
    g.alternatePenLeavingScheme = a;
    g.alternateDotCount = 0;
    g.lives--;
    g.updateChromeLives();
    g.lives == -1 ? g.changeGameplayMode(8) : g.restartGameplay(e)
  };
  g.switchMainGhostMode = function (b, c) {
    if (b == 4 && g.levels.frightTime == 0) for (var d in g.actors) {
      var f = g.actors[d];
      if (f.ghost) f.reverseDirectionsNext = a
    } else {
      f = g.mainGhostMode;
      if (b == 4 && g.mainGhostMode != 4) g.lastMainGhostMode = g.mainGhostMode;
      g.mainGhostMode = b;
      if (b == 4 || f == 4) g.playAmbientSound();
      switch (b) {
      case 1:
      case 2:
        g.currentPlayerSpeed = g.levels.playerSpeed * 0.8;
        g.currentDotEatingSpeed = g.levels.dotEatingSpeed * 0.8;
        break;
      case 4:
        g.currentPlayerSpeed = g.levels.playerFrightSpeed * 0.8;
        g.currentDotEatingSpeed = g.levels.dotEatingFrightSpeed * 0.8;
        g.frightModeTime = g.levels.frightTotalTime;
        g.modeScoreMultiplier = 1;
        break
      }
      for (d in g.actors) {
        f = g.actors[d];
        if (f.ghost) {
          if (b != 64 && !c) f.modeChangedWhileInPen = a;
          if (b == 4) f.eatenInThisFrightMode = e;
          if (f.mode != 8 && f.mode != 16 && f.mode != 32 && f.mode != 128 && f.mode != 64 || c) {
            if (!c && f.mode != 4 && f.mode != b) f.reverseDirectionsNext = a;
            f.a(b)
          }
        } else {
          f.fullSpeed = g.currentPlayerSpeed;
          f.dotEatingSpeed = g.currentDotEatingSpeed;
          f.tunnelSpeed = g.currentPlayerSpeed;
          f.d()
        }
      }
    }
  };
  g.figureOutPenLeaving = function () {
    if (g.alternatePenLeavingScheme) {
      g.alternateDotCount++;
      switch (g.alternateDotCount) {
      case m[1]:
        g.actors[g.playerCount + 1].freeToLeavePen = a;
        break;
      case m[2]:
        g.actors[g.playerCount + 2].freeToLeavePen = a;
        break;
      case m[3]:
        if (g.actors[g.playerCount + 3].mode == 16) g.alternatePenLeavingScheme = e;
        break
      }
    } else if (g.actors[g.playerCount + 1].mode == 16 || g.actors[g.playerCount + 1].mode == 8) {
      g.actors[g.playerCount + 1].dotCount++;
      if (g.actors[g.playerCount + 1].dotCount >= g.levels.penLeavingLimits[1]) g.actors[g.playerCount + 1].freeToLeavePen = a
    } else if (g.actors[g.playerCount + 2].mode == 16 || g.actors[g.playerCount + 2].mode == 8) {
      g.actors[g.playerCount + 2].dotCount++;
      if (g.actors[g.playerCount + 2].dotCount >= g.levels.penLeavingLimits[2]) g.actors[g.playerCount + 2].freeToLeavePen = a
    } else if (g.actors[g.playerCount + 3].mode == 16 || g.actors[g.playerCount + 3].mode == 8) {
      g.actors[g.playerCount + 3].dotCount++;
      if (g.actors[g.playerCount + 3].dotCount >= g.levels.penLeavingLimits[3]) g.actors[g.playerCount + 3].freeToLeavePen = a
    }
  };
  g.resetForcePenLeaveTime = function () {
    g.forcePenLeaveTime = g.levels.penForceTime * D
  };
  g.dotEaten = function (b, c) {
    g.dotsRemaining--;
    g.dotsEaten++;
    g.actors[b].c(1);
    g.playDotEatingSound(b);
    if (g.playfield[c[0]][c[1]].dot == 2) {
      g.switchMainGhostMode(4, e);
      g.addToScore(50, b)
    } else g.addToScore(10, b);
    var d = document.getElementById(g.getDotElementId(c[0], c[1]));
    d.style.display = "none";
    g.playfield[c[0]][c[1]].dot = 0;
    g.updateCruiseElroySpeed();
    g.resetForcePenLeaveTime();
    g.figureOutPenLeaving();
    if (g.dotsEaten == 70 || g.dotsEaten == 170) g.showFruit();
    g.dotsRemaining == 0 && g.finishLevel();
    g.playAmbientSound()
  };
  g.getFruitSprite = function (b) {
    var c = b <= 4 ? 128 : 160;
    b = 128 + 16 * ((b - 1) % 4);
    return [c, b]
  };
  g.getFruitScoreSprite = function (b) {
    var c = 128;
    b = 16 * (b - 1);
    return [c, b]
  };
  g.hideFruit = function () {
    g.fruitShown = e;
    g.changeElementBkPos(g.fruitEl, 32, 16, a)
  };
  g.showFruit = function () {
    g.fruitShown = a;
    var b = g.getFruitSprite(g.levels.fruit);
    g.changeElementBkPos(g.fruitEl, b[0], b[1], a);
    g.fruitTime = g.timing[15] + (g.timing[16] - g.timing[15]) * g.rand()
  };
  g.eatFruit = function (b) {
    if (g.fruitShown) {
      g.playSound("fruit", 0);
      g.fruitShown = e;
      var c = g.getFruitScoreSprite(g.levels.fruit);
      g.changeElementBkPos(g.fruitEl, c[0], c[1], a);
      g.fruitTime = g.timing[14];
      g.addToScore(g.levels.fruitScore, b)
    }
  };
  g.updateActorTargetPositions = function () {
    for (var b = g.playerCount; b < g.playerCount + 4; b++) g.actors[b].B()
  };
  g.moveActors = function () {
    for (var b in g.actors) g.actors[b].move()
  };
  g.ghostDies = function (b, c) {
    g.playSound("eating-ghost", 0);
    g.addToScore(200 * g.modeScoreMultiplier, c);
    g.modeScoreMultiplier *= 2;
    g.ghostBeingEatenId = b;
    g.playerEatingGhostId = c;
    g.changeGameplayMode(1)
  };
  g.playerDies = function (b) {
    g.playerDyingId = b;
    g.changeGameplayMode(2)
  };
  g.detectCollisions = function () {
    g.tilesChanged = e;
    for (var b = g.playerCount; b < g.playerCount + 4; b++) for (var c = 0; c < g.playerCount; c++) if (g.actors[b].tilePos[0] == g.actors[c].tilePos[0] && g.actors[b].tilePos[1] == g.actors[c].tilePos[1]) if (g.actors[b].mode == 4) {
      g.ghostDies(b, c);
      return
    } else g.actors[b].mode != 8 && g.actors[b].mode != 16 && g.actors[b].mode != 32 && g.actors[b].mode != 128 && g.actors[b].mode != 64 && g.playerDies(c)
  };
  g.updateCruiseElroySpeed = function () {
    var b = g.levels.ghostSpeed * 0.8;
    if (!g.lostLifeOnThisLevel || g.actors[g.playerCount + 3].mode != 16) {
      var c = g.levels;
      if (g.dotsRemaining < c.elroyDotsLeftPart2) b = c.elroySpeedPart2 * 0.8;
      else if (g.dotsRemaining < c.elroyDotsLeftPart1) b = c.elroySpeedPart1 * 0.8
    }
    if (b != g.cruiseElroySpeed) {
      g.cruiseElroySpeed = b;
      g.actors[g.playerCount].d()
    }
  };
  g.getSpeedIntervals = function (b) {
    if (!g.speedIntervals[b]) {
      var c = 0,
        d = 0;
      g.speedIntervals[b] = [];
      for (var f = 0; f < D; f++) {
        c += b;
        if (Math.floor(c) > d) {
          g.speedIntervals[b].push(a);
          d = Math.floor(c)
        } else g.speedIntervals[b].push(e)
      }
    }
    return g.speedIntervals[b]
  };
  g.finishLevel = function () {
    g.changeGameplayMode(9)
  };
  g.changeGameplayMode = function (b) {
    g.gameplayMode = b;
    if (b != 13) for (var c = 0; c < g.playerCount + 4; c++) g.actors[c].b();
    switch (b) {
    case 0:
      g.playAmbientSound();
      break;
    case 2:
      g.stopAllAudio();
      g.gameplayModeTime = g.timing[3];
      break;
    case 3:
      g.playerDyingId == 0 ? g.playSound("death", 0) : g.playSound("death-double", 0);
      g.gameplayModeTime = g.timing[4];
      break;
    case 6:
      g.canvasEl.style.visibility = "hidden";
      g.gameplayModeTime = g.timing[5];
      break;
    case 7:
      g.stopAllAudio();
      g.canvasEl.style.visibility = "";
      g.doorEl.style.display = "block";
      b = document.createElement("div");
      b.id = "pcm-re";
      g.prepareElement(b, 160, 0);
      g.playfieldEl.appendChild(b);
      g.gameplayModeTime = g.timing[6];
      break;
    case 4:
      g.doorEl.style.display = "block";
      b = document.createElement("div");
      b.id = "pcm-re";
      g.prepareElement(b, 160, 0);
      g.playfieldEl.appendChild(b);
      g.gameplayModeTime = g.timing[7];
      g.stopAllAudio();
      g.playerCount == 2 ? g.playSound("start-music-double", 0, a) : g.playSound("start-music", 0, a);
      break;
    case 5:
      g.lives--;
      g.updateChromeLives();
      g.gameplayModeTime = g.timing[8];
      break;
    case 8:
    case 14:
      b = document.getElementById("pcm-re");
      google.dom.remove(b);
      g.stopAllAudio();
      b = document.createElement("div");
      b.id = "pcm-go";
      g.prepareElement(b, 8, 152);
      g.playfieldEl.appendChild(b);
      g.gameplayModeTime = g.timing[9];
      break;
    case 9:
      g.stopAllAudio();
      g.gameplayModeTime = g.timing[10];
      break;
    case 10:
      g.doorEl.style.display = "none";
      g.gameplayModeTime = g.timing[11];
      break;
    case 11:
      g.canvasEl.style.visibility = "hidden";
      g.gameplayModeTime = g.timing[12];
      break;
    case 12:
      g.playfieldEl.style.visibility = "hidden";
      g.gameplayModeTime = g.timing[13];
      break;
    case 1:
      g.gameplayModeTime =
      g.timing[2];
      break;
    case 13:
      g.startCutscene();
      break
    }
  };
  g.showChrome = function (b) {
    g.showElementById("pcm-sc-1-l", b);
    g.showElementById("pcm-sc-2-l", b);
    g.showElementById("pcm-sc-1", b);
    g.showElementById("pcm-sc-2", b);
    g.showElementById("pcm-li", b);
    g.showElementById("pcm-so", b)
  };
  g.toggleSound = function (b) {
    b = window.event || b;
    b.cancelBubble = a;
    if (google.pacManSound) {
      g.userDisabledSound = a;
      g.stopAllAudio();
      google.pacManSound = e
    } else {
      google.pacManSound = a;
      g.playAmbientSound()
    }
    g.updateSoundIcon();
    return b.returnValue = e
  };
  g.updateSoundIcon = function () {
    if (g.soundEl) google.pacManSound ? g.changeElementBkPos(g.soundEl, 216, 105, e) : g.changeElementBkPos(g.soundEl, 236, 105, e)
  };
  g.startCutscene = function () {
    g.playfieldEl.style.visibility = "hidden";
    g.canvasEl.style.visibility = "";
    g.showChrome(e);
    g.cutsceneCanvasEl = document.createElement("div");
    g.cutsceneCanvasEl.id = "pcm-cc";
    g.canvasEl.appendChild(g.cutsceneCanvasEl);
    g.cutscene = B[g.cutsceneId];
    g.cutsceneSequenceId = -1;
    g.frightModeTime = g.levels.frightTotalTime;
    g.cutsceneActors = [];
    for (var b in g.cutscene.actors) {
      var c = g.cutscene.actors[b].id;
      if (c > 0) c += g.playerCount - 1;
      var d = document.createElement("div");
      d.className = "pcm-ac";
      d.id = "actor" + c;
      g.prepareElement(d, 0, 0);
      c = new E(c);
      c.el = d;
      c.elBackgroundPos = [0, 0];
      c.elPos = [0, 0];
      c.pos = [g.cutscene.actors[b].y * 8, g.cutscene.actors[b].x * 8];
      c.posDelta = [0, 0];
      c.ghost = g.cutscene.actors[b].ghost;
      g.cutsceneCanvasEl.appendChild(d);
      g.cutsceneActors.push(c)
    }
    g.cutsceneNextSequence();
    g.stopAllAudio();
    g.playAmbientSound()
  };
  g.stopCutscene = function () {
    g.playfieldEl.style.visibility = "";
    google.dom.remove(g.cutsceneCanvasEl);
    g.showChrome(a);
    g.newLevel(e)
  };
  g.cutsceneNextSequence = function () {
    g.cutsceneSequenceId++;
    if (g.cutscene.sequence.length == g.cutsceneSequenceId) g.stopCutscene();
    else {
      var b = g.cutscene.sequence[g.cutsceneSequenceId];
      g.cutsceneTime = b.time * D;
      for (var c in g.cutsceneActors) {
        var d = g.cutsceneActors[c];
        d.dir = b.moves[c].dir;
        d.speed = b.moves[c].speed;
        if (b.moves[c].elId) d.el.id = b.moves[c].elId;
        if (b.moves[c].mode) d.mode = b.moves[c].mode;
        d.b()
      }
    }
  };
  g.checkCutscene = function () {
    g.cutsceneTime <= 0 && g.cutsceneNextSequence()
  };
  g.advanceCutscene = function () {
    for (var b in g.cutsceneActors) {
      var c = g.cutsceneActors[b],
        d = l[c.dir];
      c.pos[d.axis] += d.increment * c.speed;
      c.b()
    }
    g.cutsceneTime--
  };
  g.updateActorPositions = function () {
    for (var b in g.actors) g.actors[b].k()
  };
  g.blinkEnergizers = function () {
    switch (g.gameplayMode) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 9:
    case 10:
    case 11:
    case 12:
      g.playfieldEl.className = "";
      break;
    case 8:
    case 14:
      g.playfieldEl.className = "blk";
      break;
    default:
      if (g.globalTime % (g.timing[0] * 2) == 0) g.playfieldEl.className = "";
      else if (g.globalTime % (g.timing[0] * 2) == g.timing[0]) g.playfieldEl.className = "blk";
      break
    }
  };
  g.blinkScoreLabels = function () {
    if (g.gameplayMode != 13) {
      var b = "";
      if (g.globalTime % (g.timing[17] * 2) == 0) b = "visible";
      else if (g.globalTime % (g.timing[17] * 2) == g.timing[17]) b = "hidden";
      if (b) for (var c = 0; c < g.playerCount; c++) g.scoreLabelEl[c].style.visibility = b
    }
  };
  g.finishFrightMode = function () {
    g.switchMainGhostMode(g.lastMainGhostMode, e)
  };
  g.handleGameplayModeTimer = function () {
    if (g.gameplayModeTime) {
      g.gameplayModeTime--;
      switch (g.gameplayMode) {
      case 2:
      case 3:
        for (var b = 0; b < g.playerCount + 4; b++) g.actors[b].b();
        break;
      case 10:
        Math.floor(g.gameplayModeTime / (g.timing[11] / 8)) % 2 == 0 ? g.changeElementBkPos(g.playfieldEl, 322, 2, e) : g.changeElementBkPos(g.playfieldEl, 322, 138, e)
      }
      if (g.gameplayModeTime <= 0) {
        g.gameplayModeTime = 0;
        switch (g.gameplayMode) {
        case 1:
          g.changeGameplayMode(0);
          g.ghostEyesCount++;
          g.playAmbientSound();
          g.actors[g.ghostBeingEatenId].el.className = "pcm-ac";
          g.actors[g.ghostBeingEatenId].a(8);
          var c = e;
          for (b = g.playerCount; b < g.playerCount + 4; b++) if (g.actors[b].mode == 4 || (g.actors[b].mode == 16 || g.actors[b].mode == 128) && !g.actors[b].eatenInThisFrightMode) {
            c = a;
            break
          }
          c || g.finishFrightMode();
          break;
        case 2:
          g.changeGameplayMode(3);
          break;
        case 3:
          g.newLife();
          break;
        case 4:
          g.changeGameplayMode(5);
          break;
        case 6:
          g.changeGameplayMode(7);
          break;
        case 7:
        case 5:
          b = document.getElementById("pcm-re");
          google.dom.remove(b);
          g.changeGameplayMode(0);
          break;
        case 8:
          b = document.getElementById("pcm-go");
          google.dom.remove(b);
          google.pacManQuery && google.pacManQuery();
          break;
        case 9:
          g.changeGameplayMode(10);
          break;
        case 10:
          g.changeGameplayMode(11);
          break;
        case 11:
          if (g.levels.cutsceneId) {
            g.cutsceneId = g.levels.cutsceneId;
            g.changeGameplayMode(13)
          } else {
            g.canvasEl.style.visibility = "";
            g.newLevel(e)
          }
          break;
        case 12:
          g.playfieldEl.style.visibility = "";
          g.canvasEl.style.visibility = "";
          g.switchToDoubleMode();
          break
        }
      }
    }
  };
  g.handleFruitTimer = function () {
    if (g.fruitTime) {
      g.fruitTime--;
      g.fruitTime <= 0 && g.hideFruit()
    }
  };
  g.handleGhostModeTimer = function () {
    if (g.frightModeTime) {
      g.frightModeTime--;
      if (g.frightModeTime <= 0) {
        g.frightModeTime = 0;
        g.finishFrightMode()
      }
    } else if (g.ghostModeTime > 0) {
      g.ghostModeTime--;
      if (g.ghostModeTime <= 0) {
        g.ghostModeTime = 0;
        g.ghostModeSwitchPos++;
        if (g.levels.ghostModeSwitchTimes[g.ghostModeSwitchPos]) {
          g.ghostModeTime = g.levels.ghostModeSwitchTimes[g.ghostModeSwitchPos] * D;
          switch (g.mainGhostMode) {
          case 2:
            g.switchMainGhostMode(1, e);
            break;
          case 1:
            g.switchMainGhostMode(2, e);
            break
          }
        }
      }
    }
  };
  g.handleForcePenLeaveTimer = function () {
    if (g.forcePenLeaveTime) {
      g.forcePenLeaveTime--;
      if (g.forcePenLeaveTime <= 0) {
        for (var b = 1; b <= 3; b++) if (g.actors[g.playerCount + b].mode == 16) {
          g.actors[g.playerCount + b].freeToLeavePen = a;
          break
        }
        g.resetForcePenLeaveTime()
      }
    }
  };
  g.handleTimers = function () {
    if (g.gameplayMode == 0) {
      g.handleForcePenLeaveTimer();
      g.handleFruitTimer();
      g.handleGhostModeTimer()
    }
    g.handleGameplayModeTimer()
  };
  g.tick = function () {
    var b = (new Date).getTime();
    g.lastTimeDelta += b - g.lastTime - g.tickInterval;
    if (g.lastTimeDelta > 100) g.lastTimeDelta = 100;
    if (g.canDecreaseFps && g.lastTimeDelta > 50) {
      g.lastTimeSlownessCount++;
      g.lastTimeSlownessCount == 20 && g.decreaseFps()
    }
    var c = 0;
    if (g.lastTimeDelta > g.tickInterval) {
      c = Math.floor(g.lastTimeDelta / g.tickInterval);
      g.lastTimeDelta -= g.tickInterval * c
    }
    g.lastTime = b;
    if (g.gameplayMode == 13) {
      for (b = 0; b < g.tickMultiplier + c; b++) {
        g.advanceCutscene();
        g.intervalTime = (g.intervalTime + 1) % D;
        g.globalTime++
      }
      g.checkCutscene();
      g.blinkScoreLabels()
    } else for (b = 0; b < g.tickMultiplier + c; b++) {
      g.moveActors();
      if (g.gameplayMode == 0) if (g.tilesChanged) {
        g.detectCollisions();
        g.updateActorTargetPositions()
      }
      g.globalTime++;
      g.intervalTime = (g.intervalTime + 1) % D;
      g.blinkEnergizers();
      g.blinkScoreLabels();
      g.handleTimers()
    }
  };
  g.extraLife = function (b) {
    g.playSound("extra-life", 0);
    g.extraLifeAwarded[b] = a;
    g.lives++;
    if (g.lives > 5) g.lives = 5;
    g.updateChromeLives()
  };
  g.addToScore = function (b, c) {
    g.score[c] += b;
    !g.extraLifeAwarded[c] && g.score[c] > 1E4 && g.extraLife(c);
    g.updateChromeScore(c)
  };
  g.updateChrome = function () {
    g.updateChromeLevel();
    g.updateChromeLives();
    for (var b = 0; b < g.playerCount; b++) g.updateChromeScore(b)
  };
  g.updateChromeScore = function (b) {
    var c = g.score[b].toString();
    if (c.length > g.scoreDigits) c = c.substr(c.length - g.scoreDigits, g.scoreDigits);
    for (var d = 0; d < g.scoreDigits; d++) {
      var f = document.getElementById("pcm-sc-" + (b + 1) + "-" + d),
        h = c.substr(d, 1);
      h ? g.changeElementBkPos(f, 8 + 8 * parseInt(h, 10), 144, a) : g.changeElementBkPos(f, 48, 0, a)
    }
  };
  g.updateChromeLives = function () {
    g.livesEl.innerHTML = "";
    for (var b = 0; b < g.lives; b++) {
      var c = document.createElement("div");
      c.className = "pcm-lif";
      g.prepareElement(c, 64, 129);
      g.livesEl.appendChild(c)
    }
  };
  g.updateChromeLevel = function () {
    g.levelEl.innerHTML = "";
    for (var b = g.level; b >= Math.max(g.level - 4 + 1, 1); b--) {
      var c = b >= z.length ? z[z.length - 1].fruit : z[b].fruit,
        d = document.createElement("div");
      c = g.getFruitSprite(c);
      g.prepareElement(d, c[0], c[1]);
      g.levelEl.appendChild(d)
    }
    g.levelEl.style.marginTop = (4 - Math.min(g.level, 4)) * 16 + "px"
  };
  g.createChrome = function () {
    g.canvasEl.innerHTML = "";
    g.scoreDigits = g.playerCount == 1 ? 10 : 5;
    g.scoreLabelEl = [];
    g.scoreLabelEl[0] = document.createElement("div");
    g.scoreLabelEl[0].id = "pcm-sc-1-l";
    g.prepareElement(g.scoreLabelEl[0], 160, 56);
    g.canvasEl.appendChild(g.scoreLabelEl[0]);
    g.scoreEl = [];
    g.scoreEl[0] = document.createElement("div");
    g.scoreEl[0].id = "pcm-sc-1";
    for (var b = 0; b < g.scoreDigits; b++) {
      var c = document.createElement("div");
      c.id = "pcm-sc-1-" + b;
      c.style.top = b * 8 + "px";
      c.style.left = 0;
      c.style.position = "absolute";
      c.style.width = "8px";
      c.style.height = "8px";
      g.prepareElement(c, 48, 0);
      g.scoreEl[0].appendChild(c)
    }
    g.canvasEl.appendChild(g.scoreEl[0]);
    g.livesEl = document.createElement("div");
    g.livesEl.id = "pcm-li";
    g.canvasEl.appendChild(g.livesEl);
    g.levelEl = document.createElement("div");
    g.levelEl.id = "pcm-le";
    g.canvasEl.appendChild(g.levelEl);
    if (g.playerCount == 2) {
      g.scoreLabelEl[1] = document.createElement("div");
      g.scoreLabelEl[1].id = "pcm-sc-2-l";
      g.prepareElement(g.scoreLabelEl[1], 160, 64);
      g.canvasEl.appendChild(g.scoreLabelEl[1]);
      g.scoreEl[1] = document.createElement("div");
      g.scoreEl[1].id = "pcm-sc-2";
      for (b = 0; b < g.scoreDigits; b++) {
        c = document.createElement("div");
        c.id = "pcm-sc-2-" + b;
        c.style.top = b * 8 + "px";
        c.style.left = 0;
        c.style.position = "absolute";
        c.style.width = "8px";
        c.style.height = "8px";
        g.prepareElement(c, 48, 0);
        g.scoreEl[1].appendChild(c)
      }
      g.canvasEl.appendChild(g.scoreEl[1])
    }
    if (g.soundAvailable) {
      g.soundEl = document.createElement("div");
      g.soundEl.id = "pcm-so";
      g.prepareElement(g.soundEl, -32, -16);
      g.canvasEl.appendChild(g.soundEl);
      g.soundEl.onclick =
      g.toggleSound;
      g.updateSoundIcon()
    }
  };
  g.clearDotEatingNow = function () {
    g.dotEatingNow = [e, e];
    g.dotEatingNext = [e, e]
  };
  g.playSound = function (b, c, d) {
    if (!(!g.soundAvailable || !google.pacManSound || g.paused)) {
      d || g.stopSoundChannel(c);
      try {
        g.flashSoundPlayer.playTrack(b, c)
      } catch (f) {
        g.soundAvailable = e
      }
    }
  };
  g.stopSoundChannel = function (b) {
    if (g.soundAvailable) try {
      g.flashSoundPlayer.stopChannel(b)
    } catch (c) {
      g.soundAvailable = e
    }
  };
  g.stopAllAudio = function () {
    if (g.soundAvailable) {
      try {
        g.flashSoundPlayer.stopAmbientTrack()
      } catch (b) {
        g.soundAvailable = e
      }
      for (var c = 0; c < 5; c++) g.stopSoundChannel(c)
    }
  };
  g.playDotEatingSound = function (b) {
    if (g.soundAvailable && google.pacManSound) if (g.gameplayMode == 0) if (g.dotEatingNow[b]) g.dotEatingNext[b] = a;
    else {
      if (b == 0) {
        var c = g.dotEatingSoundPart[b] == 1 ? "eating-dot-1" : "eating-dot-2";
        g.playSound(c, 1 + g.dotEatingChannel[b], a);
        g.dotTimer = window.setInterval(g.repeatDotEatingSoundPacMan, 150)
      } else {
        g.playSound("eating-dot-double", 3 + g.dotEatingChannel[b], a);
        g.dotTimerMs = window.setInterval(g.repeatDotEatingSoundMsPacMan, 150)
      }
      g.dotEatingChannel[b] = (g.dotEatingChannel[b] + 1) % 2;
      g.dotEatingSoundPart[b] =
      3 - g.dotEatingSoundPart[b]
    }
  };
  g.repeatDotEatingSound = function (b) {
    g.dotEatingNow[b] = e;
    if (g.dotEatingNext[b]) {
      g.dotEatingNext[b] = e;
      g.playDotEatingSound(b)
    }
  };
  g.repeatDotEatingSoundPacMan = function () {
    g.repeatDotEatingSound(0)
  };
  g.repeatDotEatingSoundMsPacMan = function () {
    g.repeatDotEatingSound(1)
  };
  g.playAmbientSound = function () {
    if (g.soundAvailable && google.pacManSound) {
      var b = 0;
      if (g.gameplayMode == 0 || g.gameplayMode == 1) b = g.ghostEyesCount ? "ambient-eyes" : g.mainGhostMode == 4 ? "ambient-fright" : g.dotsEaten > 241 ? "ambient-4" : g.dotsEaten > 207 ? "ambient-3" : g.dotsEaten > 138 ? "ambient-2" : "ambient-1";
      else if (g.gameplayMode == 13) b = "cutscene";
      if (b) try {
        g.flashSoundPlayer.playAmbientTrack(b)
      } catch (c) {
        g.soundAvailable = e
      }
    }
  };
  g.initializeTickTimer = function () {
    window.clearInterval(g.tickTimer);
    g.fps = C[g.fpsChoice];
    g.tickInterval = 1E3 / g.fps;
    g.tickMultiplier = D / g.fps;
    g.timing = {};
    for (var b in w) {
      var c = !google.pacManSound && (b == 7 || b == 8) ? 1 : w[b];
      g.timing[b] = Math.round(c * D)
    }
    g.lastTime = (new Date).getTime();
    g.lastTimeDelta = 0;
    g.lastTimeSlownessCount = 0;
    g.tickTimer = window.setInterval(g.tick, g.tickInterval)
  };
  g.decreaseFps = function () {
    if (g.fpsChoice < C.length - 1) {
      g.fpsChoice++;
      g.initializeTickTimer();
      if (g.fpsChoice == C.length - 1) g.canDecreaseFps = e
    }
  };
  g.addCss = function () {
    var b = "#pcm-c {  width: 554px;  border-top: 25px solid black;  padding-bottom: 25px;  height: 136px;  position: relative;  background: black;  outline: 0;  overflow: hidden;  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}#pcm-c * {  position: absolute;  overflow: hidden;}#pcm-p,#pcm-cc {  left: 45px;  width: 464px;  height: 136px;  z-index: 99;  overflow: hidden;}#pcm-p .pcm-d {  width: 2px;  height: 2px;  margin-left: 3px;  margin-top: 3px;  background: #f8b090;  z-index: 100;}#pcm-p .pcm-e {  width: 8px;  height: 8px;  z-index: 101;}#pcm-sc-1 {  left: 18px;  top: 16px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-sc-2 {  left: 18px;  top: 80px;  width: 8px;  height: 56px;  position: absolute;  overflow: hidden;}#pcm-le {  position: absolute;  left: 515px;  top: 74px;  height: 64px;  width: 32px;} #pcm-le div {  position: relative;}#pcm-sc-1-l {    left: -2px;  top: 0;  width: 48px;  height: 8px;}#pcm-sc-2-l {    left: -2px;  top: 64px;  width: 48px;  height: 8px;}#pcm-so {  left: 7px;  top: 116px;  width: 12px;  height: 12px;  border: 8px solid black;  cursor: pointer;}#pcm-li {  position: absolute;  left: 523px;  top: 0;  height: 80px;  width: 16px;}#pcm-li .pcm-lif {  position: relative;  width: 16px;  height: 12px;  margin-bottom: 3px;}#pcm-p.blk .pcm-e {  visibility: hidden;}#pcm-c .pcm-ac {  width: 16px;  height: 16px;  margin-left: -4px;  margin-top: -4px;  z-index: 110;}#pcm-c .pcm-n {  z-index: 111;}#pcm-c #pcm-stck {  z-index: 109;}#pcm-c #pcm-gbug {  width: 32px;}#pcm-c #pcm-bpcm {  width: 32px;  height: 32px;  margin-left: -20px;  margin-top: -20px;}#pcm-f,#pcm-le div {  width: 32px;  height: 16px;  z-index: 105;}#pcm-f {  margin-left: -8px;  margin-top: -4px;}#pcm-do {  width: 19px;  height: 2px;  left: 279px;  top: 46px;  overflow: hidden;  position: absolute;  background: #ffaaa5;}#pcm-re {  width: 48px;  height: 8px;  z-index: 120;  left: 264px;  top: 80px;}#pcm-go {  width: 80px;  height: 8px;  z-index: 120;  left: 248px;  top: 80px;}";
    g.styleElement =
    document.createElement("style");
    g.styleElement.type = "text/css";
    if (g.styleElement.styleSheet) g.styleElement.styleSheet.cssText = b;
    else g.styleElement.appendChild(document.createTextNode(b));
    document.getElementsByTagName("head")[0].appendChild(g.styleElement)
  };
  g.createCanvasElement = function () {
    g.canvasEl = document.createElement("div");
    g.canvasEl.id = "pcm-c";
    g.canvasEl.hideFocus = a;
    document.getElementById("logo").appendChild(g.canvasEl);
    g.canvasEl.tabIndex = 0;
    g.canvasEl.focus()
  };
  g.everythingIsReady = function () {
    if (!g.ready) {
      g.ready = a;
      var b = document.getElementById("logo-l");
      google.dom.remove(b);
      document.getElementById("logo").style.background = "black";
      g.addCss();
      g.createCanvasElement();
      g.speedIntervals = [];
      g.oppositeDirections = [];
      g.oppositeDirections[1] = 2;
      g.oppositeDirections[2] = 1;
      g.oppositeDirections[4] = 8;
      g.oppositeDirections[8] = 4;
      g.addEventListeners();
      g.fpsChoice = 0;
      g.canDecreaseFps = a;
      g.initializeTickTimer();
      g.newGame()
    }
  };
  g.checkIfEverythingIsReady = function () {
    if (g.soundReady || g.graphicsReady) g.updateLoadingProgress(0.67);
    if (g.soundReady && g.graphicsReady) {
      g.updateLoadingProgress(1);
      g.everythingIsReady()
    }
  };
  g.preloadImage = function (b) {
    var c = new Image,
      d = google.browser.engine.IE;
    if (!d) c.onload = g.imageLoaded;
    c.src = b;
    d && g.imageLoaded()
  };
  g.imageLoaded = function () {
    g.graphicsReady = a;
    g.checkIfEverythingIsReady()
  };
  g.prepareGraphics = function () {
    g.graphicsReady = e;
    g.preloadImage("src/pacman10-hp-sprite-2.png")
  };
  g.trimString = function (b) {
    return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
  };
  g.g = function (b, c) {
    if (b < c) return -1;
    else if (b > c) return 1;
    return 0
  };
  g.compareVersions = function (b, c) {
    for (var d = 0, f = g.trimString(String(b)).split("."), h = g.trimString(String(c)).split("."), j = Math.max(f.length, h.length), k = 0; d == 0 && k < j; k++) {
      var x = f[k] || "",
        F = h[k] || "",
        G = new RegExp("(\\d*)(\\D*)", "g"),
        H = new RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = G.exec(x) || ["", "", ""],
          u = H.exec(F) || ["", "", ""];
        if (t[0].length == 0 && u[0].length == 0) break;
        d = t[1].length == 0 ? 0 : parseInt(t[1], 10);
        var I = u[1].length == 0 ? 0 : parseInt(u[1], 10);
        d = g.g(d, I) || g.g(t[2].length == 0, u[2].length == 0) || g.g(t[2], u[2])
      } while (d == 0)
    }
    return d
  };
  g.getFlashVersion = function (b) {
    b = b.match(/[\d]+/g);
    b.length = 3;
    return b.join(".")
  };
  g.detectFlash = function () {
    var b = e,
      c = "";
    if (navigator.plugins && navigator.plugins.length) {
      var d = navigator.plugins["Shockwave Flash"];
      if (d) {
        b = a;
        if (d.description) c = g.getFlashVersion(d.description)
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        b = a;
        c = "2.0.0.11"
      }
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
      if (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) {
        c = d.enabledPlugin.description;
        c = g.getFlashVersion(c)
      }
    } else try {
      d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      b = a;
      c = g.getFlashVersion(d.GetVariable("$version"))
    } catch (f) {
      try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        b = a;
        c = "6.0.21"
      } catch (h) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          b = a;
          c = g.getFlashVersion(d.GetVariable("$version"))
        } catch (j) {}
      }
    }
    g.hasFlash = b;
    g.flashVersion = c
  };
  g.isFlashVersion = function (b) {
    return g.compareVersions(g.flashVersion, b) >= 0
  };
  g.prepareSound = function () {
    g.soundAvailable = e;
    g.soundReady = e;
    g.detectFlash();
    if (!g.hasFlash || !g.isFlashVersion("9.0.0.0")) {
      g.soundReady = a;
      g.checkIfEverythingIsReady()
    } else {
      g.flashIframe = document.createElement("iframe");
      g.flashIframe.name = "pm-sound";
      g.flashIframe.style.position = "absolute";
      g.flashIframe.style.top = "-150px";
      g.flashIframe.style.border = 0;
      g.flashIframe.style.width = "100px";
      g.flashIframe.style.height = "100px";
      google.dom.append(g.flashIframe);
      g.flashIframeDoc = g.flashIframe.contentDocument;
      if (g.flashIframeDoc == undefined || g.flashIframeDoc == null) g.flashIframeDoc = g.flashIframe.contentWindow.document;
      g.flashIframeDoc.open();
      g.flashIframeDoc.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="pacman-sound-player" type="application/x-shockwave-flash"> <param name="movie" value="src/swf/pacman10-hp-sound.swf"> <param name="allowScriptAccess" value="always"> <object id="pacman-sound-player-2"  type="application/x-shockwave-flash" data="src/swf/pacman10-hp-sound.swf" width="0" height="0"><param name="allowScriptAccess" value="always"> </object></object></body></html>');
      g.flashIframeDoc.close();
      window.setTimeout(g.flashNotReady, 3E3)
    }
  };
  g.flashNotReady = function () {
    if (!g.ready) {
      g.soundAvailable = e;
      g.soundReady = a;
      g.checkIfEverythingIsReady()
    }
  };
  g.flashReady = function (b) {
    g.flashSoundPlayer = b;
    g.soundAvailable = a;
    g.soundReady = a;
    g.checkIfEverythingIsReady()
  };
  g.flashLoaded = function () {
    if (g.flashIframeDoc) {
      var b = g.flashIframeDoc.getElementById("pacman-sound-player");
      if (b && b.playTrack) {
        g.flashReady(b);
        return
      } else if ((b = g.flashIframeDoc.getElementById("pacman-sound-player-2")) && b.playTrack) {
        g.flashReady(b);
        return
      }
    }
    g.flashNotReady()
  };
  g.destroy = function () {
    if (google.pacman) {
      g.stopAllAudio();
      window.clearInterval(g.tickTimer);
      window.clearInterval(g.dotTimer);
      window.clearInterval(g.dotTimerMs);
      google.dom.remove(g.styleElement);
      google.dom.remove(g.flashIframe);
      google.dom.remove(g.canvasEl);
      google.pacman = undefined
    }
  };
  g.exportFunctionCalls = function () {
    google.pacman = {};
    google.pacman.insertCoin = g.insertCoin;
    google.pacman.flashLoaded = g.flashLoaded;
    google.pacman.destroy = g.destroy
  };
  g.updateLoadingProgress = function (b) {
    b = Math.round(b * 200);
    document.getElementById("logo-b").style.width = b + "px"
  };
  g.init = function () {
    g.ready = e;
    document.getElementById("logo").title = "";
    g.updateLoadingProgress(0.33);
    g.exportFunctionCalls();
    g.useCss = navigator.userAgent.indexOf("MSIE 5.") != -1 || navigator.userAgent.indexOf("MSIE 6.") != -1 || navigator.userAgent.indexOf("MSIE 7.") != -1 ? e : a;
    g.prepareGraphics();
    g.prepareSound()
  };
  g.init();
}();