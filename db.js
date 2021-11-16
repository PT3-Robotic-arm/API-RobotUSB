let datas = new Map();

function addRow(data) {
    datas.set(datas.size, data);
}

function getLatestRow() {
  return getRow(datas.size - 1);
}

function getRow(id) {
  if (typeof id == "string")
    id = parseInt(id);

  if (id >= datas.size || id < 0)
    return {};

  let toRet = datas.get(id) || {};
  toRet.id = id;

  return toRet;
}

function getSince(from) {
    let toRet = [];

    if (from >= datas.size || from < 0)
        return {"error": "Invalid range!"};

    for (let i = from; i < datas.size; i++) {
        toRet.push({
          ...getRow(i)
        });
    }

    return toRet;
}

module.exports = {
  addRow: addRow,
  getLatestRow: getLatestRow,
  getSince: getSince,
  getRow: getRow
}
