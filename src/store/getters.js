const getters = {
  userId: (state) => state.user.userId,
  token: (state) => state.user.token,
  userName: (state) => state.user.userName,
  roleId: (state) => state.user.roleId,
  roleName: (state) => state.user.roleName,
  addRouters: (state) => state.asynRoutes.addRouters,
  routers: (state) => state.asynRoutes.routers,
  visitedViews: (state) => state.tagView.visitedViews,
  cachedViews: (state) => state.tagView.cachedViews
}
export default getters
