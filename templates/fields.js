module.exports = `import React, { Component } from 'react';
import Flexbox from 'flexbox-react'; 
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { Calendar, DayOfWeek } from 'office-ui-fabric-react/lib/Calendar';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
//import './Modal.Basic.Example.scss';
import { observer } from 'mobx-react'; 
import 'office-ui-fabric-react/dist/sass/_References.scss';

export const FabricTextField = observer (class FabricTextField extends Component {
    constructor(props){
        super(props); 
        this._onChanged = this._onChanged.bind(this); 
    }
    _onChanged(value){
        console.log('TextField onChanged: ', value);
        this.props.value = value; 
    }
    renderComp(){
        let comp; 
            comp = 
                <Flexbox className='label-field' flexDirection='column' flex='1 1 auto' alignItems='flex-start'  >
                    <Flexbox className='label' >
                        <span className='ms-font-s ms-fontWeight-semibold ms-fontColor-themePrimary'>{this.props.label}</span>
                    </Flexbox>
                    <Flexbox className='field' width={this.props.width} >
                        <TextField 
                            autoComplete='on'
                            placeHolder={this.props.placeHolder} 
                            className={this.props.name} 
                            id={this.props.id} 
                            name={this.props.name}
                            value={this.props.value} 
                            onBlur={this.props.handleControlOnBlur} 
                            errorMessage={this.props.errorMessage} 
                            readOnly={this.props.readOnly} 
                            disabled={this.props.readOnly}
                            inputClassName={this.props.name}
                            onFocus={this.props.handleControlInFocus}
                            required={this.props.required} 
                            resizable={false}
                            autoAdjustHeight
                            onChanged={this._onChanged}
                            
                        />
                    </Flexbox>
                </Flexbox>

        return comp;
    }
    render(){
       return this.renderComp();
    }
});

export const FabricMaskedTextField = observer (class FabricMaskedTextField extends Component {
    constructor(props){
        super(props); 
        this._onChanged = this._onChanged.bind(this); 
        this.renderComp = this.renderComp.bind(this);
    }
    _onChanged(value){
        console.log(value)
        this.props.value = value;
    }
    renderComp(){
        let comp; 
            comp = 
                <Flexbox className='label-field' flexDirection='column' flex='1 1 auto' alignItems='flex-start' >
                    <Flexbox className='label' >
                        <span className='ms-font-s ms-fontWeight-semibold ms-fontColor-themePrimary'>{this.props.label}</span>
                    </Flexbox>
                    <Flexbox className='field' width={this.props.width} >
                        <MaskedTextField 
                            autoComplete='on'
                            placeHolder={this.props.placeHolder} 
                            className={this.props.name} 
                            id={this.props.id} 
                            name={this.props.name}
                            value={this.props.value} 
                            defaultValue={this.props.value}
                            onBlur={this.props.handleControlOnBlur}
                            onChanged={this._onChanged} 
                            errorMessage={this.props.errorMessage} 
                            readOnly={this.props.readOnly} 
                            disabled={this.props.readOnly}
                            inputClassName={this.props.name}
                            onFocus={this.props.handleControlInFocus}
                            required={this.props.required} 
                            mask={this.props.mask}
                            resizable={false}
                            width={this.props.width}
                            
                        />
                    </Flexbox>
                </Flexbox>

        return comp;
    }
    render(){
       return this.renderComp();
    }
});


export const FabricChoiceGroup = observer (class FabricChoiceGroup extends Component {
    constructor(props){
        super(props); 
        

    }
    
    renderComp(){
        let comp; 
            comp = 
                <div>
                    <ChoiceGroup
                    defaultSelectedKey={this.props.defaultSelectedKey}
                    selectedKey={this.props.selectedKey}
                    options={this.props.options}
                    onChange={this.props.onChange}
                    label={this.props.label}
                    required={this.props.required}
                    />
                </div>
    

        return comp;
    }
    render(){
       return this.renderComp();
    }
});

export const FabricDropdown = observer (class FabricDropDown extends Component {
    constructor(props){
        super(props); 
        this._onChange = this._onChange.bind(this); 
        this.renderComp = this.renderComp.bind(this); 
    }
    _onChange(item){
        const options = this.props.options.slice();
        const key =  item.key; 

        this.props.selectedKey = key;
        this.props.value = options[key].text;
       
        console.log(this.props.selectedKey); 
        console.log(this.props.value); 
        console.log('onChanged: ', item); 
    }
    renderComp(){
        let comp; 
            comp = 
                <Flexbox flexDirection='column' flex='1 1 auto' alignItems='flex-start' >
                    <Flexbox className='label' >
                        <span className='ms-font-m ms-fontWeight-semibold ms-fontColor-themePrimary'>{this.props.label}:</span>
                    </Flexbox>
                    <Flexbox className='field'>
                        <Dropdown 
                        placeHolder={this.props.placeHolder} 
                        name={this.props.name} 
                        value={this.props.value}
                        
                        options={this.props.options.slice()} 
                        onChanged={this._onChange}
                        selectedKey={this.props.selectedKey} 
                        defaultSelectedKeys={this.props.defaultSelectedKey} 
                        disabled={this.props.readOnly}
                        dropdownWidth={this.props.dropdownWidth} />
                    </Flexbox>
                </Flexbox>
    
        return comp;
    }
    render(){
       return this.renderComp();
    }
});

export const FabricDatePicker = observer (class FabricDatePicker extends Component {
    constructor(props){
        super(props);
        this._calendarButtonElement = React.createRef();
        this.DayPickerStrings = {
            months: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
          
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          
            shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          
            goToToday: 'Go to today'
        }; 
        this.state = {
            showCalendar: false,
            selectedDate: null
          };
      
          this._onClick = this._onClick.bind(this);
          this._onDismiss = this._onDismiss.bind(this);
          this._onSelectDate = this._onSelectDate.bind(this);
    }
    _onClick(event){
        this.props.showCalendar = !this.props.showCalendar; 

        /*
        this.setState((prevState) => {
          prevState.showCalendar = !prevState.showCalendar;
          return prevState;
        });
        */
    };
    
    _onDismiss(){
        this.props.showCalendar = false; 
        /*
        this.setState((prevState) => {
          prevState.showCalendar = false;
          return prevState;
        });
        */
    };
    
    _onSelectDate(date){
        this.props.showCalendar = false; 
        this.props.selectedDate = date; 
        /*
        this.setState((prevState) => {
          prevState.showCalendar = false;
          prevState.selectedDate = date;
          return prevState;
        });
        */
    };

    renderComp(){
        let comp; 
            comp = 
                <Flexbox className='label-field' flexDirection='column' flex='1 1 auto' alignItems='flex-start'  >
                    <Flexbox className='label' >
                        <span className='ms-font-s ms-fontWeight-semibold ms-fontColor-themePrimary'>Date:</span>
                    </Flexbox>
                    <Flexbox className='field' >
                        <div ref={calendarBtn => (this._calendarButtonElement )}>
                            <DefaultButton
                                onClick={this._onClick}
                                text={!this.props.selectedDate ? this.props.label : this.props.selectedDate.toLocaleDateString()}
                            />
                        </div>
                            {this.props.showCalendar && (
                                <Callout
                                    isBeakVisible={false}
                                    className="ms-DatePicker-callout"
                                    gapSpace={0}
                                    doNotLayer={false}
                                    target={this._calendarButtonElement}
                                    directionalHint={DirectionalHint.bottomLeftEdge}
                                    onDismiss={this._onDismiss}
                                    setInitialFocus={true}
                                >
                                    <FocusTrapZone isClickableOutsideFocusTrap={true}>
                                    <Calendar
                                        onSelectDate={this._onSelectDate}
                                        onDismiss={this._onDismiss}
                                        isMonthPickerVisible={this.props.isMonthPickerVisible}
                                        value={this.props.selectedDate}
                                        firstDayOfWeek={DayOfWeek.Sunday}
                                        strings={this.DayPickerStrings}
                                        isDayPickerVisible={this.props.isDayPickerVisible}
                                        highlightCurrentMonth={this.props.highlightCurrentMonth}
                                        highlightSelectedMonth={this.props.highlightSelectedMonth}
                                        showMonthPickerAsOverlay={this.props.showMonthPickerAsOverlay}
                                    />
                                    </FocusTrapZone>
                                </Callout>
                        )}
                    </Flexbox>
                    
                </Flexbox>

        return comp;
    }
    render(){
       return this.renderComp();
    }
});

export const Table = observer (class Table extends Component{
    constructor(props){
        super(props)
        /*this.data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
        
          this.columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
          Cell: this.renderEditable.bind(this), // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }]; 
        */
        this.renderEditable = this.renderEditable.bind(this); 
    }

    renderEditable(cellInfo) {
        console.log('cell info: ', cellInfo); 
        return (
          <div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...this.props.data];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.props.data = data ;
            }}
            dangerouslySetInnerHTML={{
              __html: this.props.fields.data[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
      }
    renderComp(){
       
            
            
        let comp =(    
        <ReactTable className='table-striped-highlight' style={{width: '75%'}}
                data={this.props.data.slice()}
                columns={this.props.columns.slice()}
              />
        )
        
        return comp; 
    }
    render(){
        return this.renderComp(); 
    }
} )
`