const config = {
    apiRoot: 'https://picsum.photos',
    apiRoutes: {
        picturesListView: 'v2/list',
        pictureDetailSet: function(id: number) {
            return `/id/${id}/info`
        }
    },
    routes: {
        home: '',
        picturesListView: 'pictures/list',
        picturesDetailView: 'pictures/detail/:id',
        picturesDetailViewSet: function(id: number) {
            return `pictures/detail/${id}`
        }
    }
}
export default config