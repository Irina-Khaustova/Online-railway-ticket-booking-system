export default function sort (ind, block, arr) {
    if(arr.includes(ind)) {
      block.push({index:ind, class: 'scheme-block-item available'})
    } else {
      block.push({index:ind, class: 'scheme-block-item not-available'})
    }
   }