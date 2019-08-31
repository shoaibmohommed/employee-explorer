import { isArray, isEmpty } from 'lodash';
export const BaseUrl = 'http://api.additivasia.io/api/v1/assignment/employees/';

// const forEachItem = async item => {
//     let items = await getSubsList(item);
//     directSubs.concat(items);
// };

export const getSubsList = async value => {
    const rawResponse = await fetch(`${BaseUrl}${value}`);
    let response = await rawResponse.json();

    if (!isEmpty(response)) {
        let directSubs = [];
        if (isArray(response) && response.length === 2) {          
            directSubs = response[1]["direct-subordinates"];
        }

        const promises = directSubs.map(async item => {
            const data = await getSubsList(item);
            if(data.length>0){
                directSubs = directSubs.concat(data);
            }
           
            return directSubs;
        });
        await Promise.all(promises);

        return directSubs;
    };
    return [];
}