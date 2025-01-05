import Layout from "./Layout.tsx";
import Form from "react-bootstrap/Form";
import Select from 'react-select';
import {useState} from "react";
import {FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Settings() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedNewsSites, setSelectedNewsSites] = useState([]);

    const categoryOptions = [
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
        { value: 'education', label: 'Education' },
        { value: 'health', label: 'Health' },
    ];

    const newsSiteOptions = [
        { value: 'https://ekantipur.com/', label: 'Kantipur' },
        { value: 'https://onlinekhabar.com/', label: 'Online Khabar' },
        { value: 'https://ratopati.com/', label: 'Ratopati' },
        { value: 'https://setopati.com/', label: 'Setopati' },
        { value: 'https://nagariknews.nagariknetwork.com/', label: 'Nagarik News' },
        { value: 'https://thehimalayantimes.com/', label: 'The Himalayan Times' },
        { value: 'https://gorkhapatraonline.com/', label: 'Gorkhapatra' },
        { value: 'https://annapurnapost.com/', label: 'Annapurna Post' },
        { value: 'https://nepalnews.com/', label: 'Nepal News' },
        { value: 'https://news24nepal.tv/', label: 'News 24 Nepal' },
    ];

    const savePreferences = () => {
        console.log('save preferences', selectedNewsSites, selectedOptions)
    }

    return (
        <Layout>
            <Form>
                <FormGroup className='d-flex' style={{ gap: '10px' }}>
                    <div className='w-50'>
                        <Form.Label>Select Preferred Category</Form.Label>
                        <Select
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            options={categoryOptions}
                            isMulti
                            placeholder="Select categories"
                            closeMenuOnSelect={false}
                        />
                    </div>

                    <div className='w-50'>
                        <Form.Label>Select Preferred News Site</Form.Label>
                        <Select
                            value={selectedNewsSites}
                            onChange={setSelectedNewsSites}
                            options={newsSiteOptions}
                            isMulti
                            placeholder="Select News Site"
                            closeMenuOnSelect={false}
                        >
                        </Select>
                    </div>
                </FormGroup>

                <div className='mt-4 d-flex justify-content-end'>
                    <Button variant="primary" onClick={savePreferences}>Save Preference</Button>
                </div>
            </Form>
        </Layout>
    )
}

export default Settings;
