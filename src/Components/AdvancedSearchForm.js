import React, {useEffect} from 'react'
import {Form, Row, Button, Dropdown, DropdownButton} from 'react-bootstrap'
import DropdownComponent from './DropdownComponent'
import allWikiProjects from '../allWikiProjects.json'
import allWikiCountries from '../allWikiCountries.json'

function AdvacnedSearchForm(props){

  function onChangeTimestamp(e){
    props.setSelectedSnapshot(e.target.value)
  }

  function onChangeYear(e) {
    props.setSelectedYear(e.target.value)
  }

  function onSelectProject(eventKey, event){
    props.setSelectedWikiProject(eventKey)
  }

  function onSelectCitizenship(e){
    props.setSelectedCitizenship(e)
  }

  function onSelectOccupation(eventKey, event){
    props.setSelectedOccupation(eventKey)
  }

  function onClickReset(e){
    props.setSelectedSnapshot(null)
    props.setSelectedYear(null)
    props.setSelectedWikiProject(null)
    props.setSelectedCitizenship(null)
    props.setSelectedOccupation(null)
  }

  function lookupWikiProjectSelection(wikiCode){
    return allWikiProjects[wikiCode]
  }

  function lookupWikiCitizenshipSelection(countryCode){
    return allWikiCountries[countryCode]
  }
  const wikiProjectDropdownTitle =  props.selectedWikiProject == null ? "Wikimedia Project - Any" : lookupWikiProjectSelection(props.selectedWikiProject)

  const wikiCitizenshipDropdownTitle = props.selectedCitizenship == null ? "Citizenship - Any" : lookupWikiCitizenshipSelection(props.selectedCitizenship)

  const occupationDropdownTitle = props.selectedOccupation == null ? "Ocupation - Any" : "insert options data"
  return(
    <Form onSubmit={props.onSubmit}>
      <Row>
        <Form.Group controlId="selectedSnapshot">
          <Form.Label>Timestamp</Form.Label>
          <Form.Control type="text" placeholder={props.selectedSnapshot === null ? props.selectedSnapshot: "Latest"} onChange={onChangeTimestamp} />
        </Form.Group>

        <Form.Group controlId="selectedYear">
          <Form.Label>Year of Birth '[YEAR]~[YEAR]'</Form.Label>
          <Form.Control type="text"  placeholder={props.selectedYear ? props.selectedYear : "No filter"} onChange={onChangeYear} />
        </Form.Group>

        <DropdownButton
          id="selectedWikiProject"
          title={wikiProjectDropdownTitle}
          className="dropdown"
          onSelect={onSelectProject}
        >
        <DropdownComponent options={allWikiProjects} />
        </DropdownButton>

        <DropdownButton
          id="selectedCitizenship"
          title={wikiCitizenshipDropdownTitle}
          className="dropdown"
          onSelect={onSelectCitizenship}
        >
        <DropdownComponent options={allWikiCountries} />
        </DropdownButton>
        <DropdownButton
          id="selectedOccupation"
          title={occupationDropdownTitle}
          className="dropdown"
          onSelect={onSelectOccupation}
        >
          <DropdownComponent options={["options here"]} />
        </DropdownButton>
      </Row>
      <Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button variant="primary" onClick={onClickReset}>
          Reset
        </Button>
      </Row>
    </Form>
  )
}

export default AdvacnedSearchForm
