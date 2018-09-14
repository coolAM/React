import jjv from 'jjv';

let env = jjv();
 
let validatorExpiration = env.validate({
    type: 'object',
    properties: {
        month: {
            type: 'number'
        },
        year: {
            type: 'number'
        }
    },
    required: ['month', 'year']
 })
 export default validatorExpiration;