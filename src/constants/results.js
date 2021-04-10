
export const korneev = "Корнеев";
export const protsenko = "Проценко";

import dataJson from '../db/db.json';

export const artemyev = "Артемьев";
export const korneev = "Корнеев";
export const mironov = "Миронов";
export const kosyrev = "Косырев";
export const maxBall = 10;

export const results = dataJson || {
  [artemyev]: {
    l1: 80,
    l2: 100,
    l3: 90,
    l4: 100,
    l5: 80,
    l6: 70,
    l7: 100,
    l8: 85,
    bonus: 10
  },  
  [korneev]: {
    l1: 70,
    l2: 100,
    l3: 85,
    l4: 90,
    l5: 100,
    l6: 75,
    l7: 60,
    l8: 90,
    bonus: 10
  },
  [protsenko]: {
    l1: 70,
    l2: 100,
    l3: 85,
    l4: 90,
    l5: 100,
    l6: 75,
    l7: 60,
    l8: 90,
    bonus: 10},
  [mironov]: {
    l1: 70,
    l2: 100,
    l3: 85,
    l4: 90,
    l5: 100,
    l6: 75,
    l7: 60,
    l8: 90,
    bonus: 10
},
  [kosyrev]: {
    l1: 70,
    l2: 100,
    l3: 85,
    l4: 90,
    l5: 100,
    l6: 75,
    bonus: 0
  },
};
