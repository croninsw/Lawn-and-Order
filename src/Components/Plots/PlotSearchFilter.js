// import React, { Component } from "react"
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

// export default class PlotSearchFilter extends Component {
//     state = {
//         address: [],
//         total_sqFeet: [],
//         avail_sqFeet: [],
//         anyAll: false,
//         fruit: false,
//         vegetables: false,
//         flowers: false,
//         search: ""
//     }

    // toggleChangeAnyAll = () => {
    //     this.setState(prevState => ({
    //       anyAll: !prevState.anyAll,
    //     }))
    //   }

    // toggleChangeFruit = () => {
    //     this.setState(prevState => ({
    //       fruit: !prevState.fruit,
    //     }))
    //   }

    // toggleChangeVegetables = () => {
    //     this.setState(prevState => ({
    //       vegetables: !prevState.vegetables,
    //     }))
    //   }

    // toggleChangeFlowers = () => {
    //     this.setState(prevState => ({
    //       flowers: !prevState.flowers,
    //     }))
    //   }

    // render() {
    //     return (
    //         <React.Fragment>
    //             <section className="bountyHunter">
    //             <legend>Filter by Crop Types</legend>
    //                 <Form>
    //                 <FormGroup check>
    //                     <Label check>
    //                         <Input type="checkbox"  name="bountyType" value="anyAll"
    //                         checked={this.state.anyAll}
    //                         onChange={this.toggleChangeAnyAll} />
    //                         Any / All
    //                     </Label>
    //                 </FormGroup>
    //                 <FormGroup check>
    //                     <Label check>
    //                         <Input type="checkbox"  name="bountyType" value="fruit"
    //                         checked={this.state.fruit}
    //                         onChange={this.toggleChangeFruit} />
    //                         Fruit
    //                     </Label>
    //                 </FormGroup>
    //                 <FormGroup check>
    //                     <Label check>
    //                         <Input type="checkbox"  name="bountyType" value="vegetables"
    //                         checked={this.state.vegetables}
    //                         onChange={this.toggleChangeVegetables} />
    //                         Vegetables
    //                     </Label>
    //                 </FormGroup>
    //                 <FormGroup check>
    //                     <Label check>
    //                         <Input type="checkbox" name="bountyType" value="flowers"
    //                         checked={this.state.flowers}
    //                         onChange={this.toggleChangeFlowers} />
    //                         Flowers
    //                     </Label>
    //                 </FormGroup>
    //                 </Form>
    //             </section>

    //             <section className="plotSizeFilter">
    //                 <select>
    //                     <option value=" ">Please Select Yard Size</option>
    //                     <option>Extra Large</option>
    //                     <option>Large</option>
    //                     <option>Medium</option>
    //                     <option>Small</option>
    //                     <option>Extra Small</option>
    //                 </select>
    //             </section>

    //             <Button>Submit</Button>
    //         </React.Fragment>
    //     )
    // }

//     updateSearch(event) {
//         this.setState({ search: event.target.value })
//     }

//     render() {
//         let filteredPlots = this.props.plots.filter(
//             (plot) => {
//                 return plot.Object.keys(plot).indexOf(this.state.search !== -1  )

//         })
//         return (
//             <div>
//                 <ul>
//                     <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
//                 </ul>
//             </div>
//         )
//     }
// }