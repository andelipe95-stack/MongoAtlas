const requireRole = require('../../middleware/require_role');


const fakeRes = () => {
    const res = {};
    res.status = jest.fn(() => res);
    res.json = jest.fn(() => res);
    return res;
};

//TEST REQUIRE ROLE

describe('requireRole', () => {
    it('llamamos a next() si pasa rol y esta permitido', () => {
        const req = {user: { role: 'admin'}};
        const res = fakeRes();
        const next = jest.fn();
        requireRole('admin')(req, res, next);
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
    });
    
    it('devuelve error status...', () => {

        const req = {user: { role: 'teacher'}};
        const res = fakeRes();
        const next = jest.fn();
        requireRole('admin')(req, res, next);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(next).not.toHaveBeenCalled();
    });
});