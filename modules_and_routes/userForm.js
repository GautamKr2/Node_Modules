const userForm = (req, resp) => {
    resp.write(`
        <form action='/submit' method='post'>
            <input type='text' placeholder='Enter name' name='name'/> <br/><br/>
            <input type='text' placeholder='Enter email' name='email'/><br/><br/>
            <button> Submit </button>
        </form>
    `)
}

module.exports = userForm;