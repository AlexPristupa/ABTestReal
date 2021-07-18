import { GetUsers, GetRollingRetention } from "../pages/api/user"; //index./pages/api/user/index";

export async function getUsersAsync() {
  let rc;
  const res = await GetUsers();

  if (res) {
    rc = res.data;
    console.log(rc);
  }

  return rc || [];
}

export async function getRollingRetention() {
  let rc;
  const res = await GetRollingRetention();

  if (res) {
    rc = res;
  }

  return rc || 0;
}
