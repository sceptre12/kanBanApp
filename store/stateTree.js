const StateTree = Object.assign({},{
    socketConnection: {
        isConnected: false,
        connectedHost: ''
    },
    qrScanner: {
      isScannerActive: false
    },
    authentication: {
        username: '',
        isAuthenticated: false
    },
    projects: {

    },
    tasks: {

    }
})

export default StateTree