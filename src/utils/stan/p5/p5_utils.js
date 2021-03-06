export const inside_ellipse = function (cursor, pos, size) {
  let x = cursor.x;
  let y = cursor.y;
  let px = pos.x;
  let py = pos.y;
  let sx = size.x;
  let sy = size.y;
  let bool_x = false;
  if (x < px + sx / 2 && x > px - sx / 2) {
    bool_x = true;
  }
  let bool_y = false;
  if (y < py + sy / 2 && y > py - sy / 2) {
    bool_y = true;
  }

  if (bool_x && bool_y) return true;
  return false;
};

export const inside_rect = function (cursor, pos, size) {
  let x = cursor.x;
  let y = cursor.y;
  let px = pos.x;
  let py = pos.y;
  let sx = size.x;
  let sy = size.y;
  let bool_x = false;
  if (x < px + sx && x > px) {
    bool_x = true;
  }
  let bool_y = false;
  if (y < py + sy && y > py) {
    bool_y = true;
  }

  if (bool_x && bool_y) return true;
  return false;
};
