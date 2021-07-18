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
