import Role from '../models/Role.js'

export const getRoles = async (req, res) => {
    try {
        const Roles = await Role.find()
        res.json(Roles)

    } catch (error) {
        res.status(500).error(error)

    }

}

export const createRol = async (req, res) => {
    try {
        const { name } = req.body
        const newRole = new Role({
            name
        })

        newRole.save()
        res.json('Rol created!')

    } catch (error) {
        res.status(500).error(error)

    }


}

export const updateRol = async (req, res) => {
    try {
        
        await Role.findByIdAndUpdate(req.body.role_id,{name:req.body.name})
        res.json('Role updated!')

    } catch (error) {
        res.status(500).error(error)
        
    }

}

export const deleteRol = async (req, res) => {
    try {
       await Role.findByIdAndDelete(req.body.role_id)
       res.json('Role deleted!')
    } catch (error) {
        res.status(500).error(error)
        
    }

}
