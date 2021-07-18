import * as service from "../api/user/index";

export async function getUsersAsync() {
  let rc;
  const res = await service.GetUsers();

  if (res) {
    rc = res.data;
    console.log(rc);
  }

  return rc || [];
}

export async function getRollingRetention() {
  let rc;
  const res = await service.GetRollingRetention();

  if (res) {
    rc = res;
  }

  return rc || 0;
}

export async function getHistogram() {
  let rc;
  const res = await service.GetRollingRetention();

  if (res) {
    rc = res;
  }

  return rc || [];
}
