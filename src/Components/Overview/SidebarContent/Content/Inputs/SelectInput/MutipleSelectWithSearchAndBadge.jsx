import React, {useEffect, useState} from 'react';
import {IoMdFootball} from "react-icons/io";
import {MdOutlineSportsCricket, MdOutlineSportsTennis} from "react-icons/md";
import {GiTennisRacket} from "react-icons/gi";

const MutipleSelectWithSearchAndBadge = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [content, setContent] = useState('Select Option');
    const [content2, setContent2] = useState('Select Option');

    const optionArray = ['Football', 'Cricket', 'Tennis', 'Badminton'];
    const optionArray2 = [
        {
            icon: <IoMdFootball />,
            title: 'Football',
        },
        {
            icon: <MdOutlineSportsCricket />,
            title: 'Cricket',
        },
        {
            icon: <MdOutlineSportsTennis />,
            title: 'Tennis',
        },
        {
            icon: <GiTennisRacket />,
            title: 'Badminton',
        },
    ];

    document.addEventListener('click', function (event) {
        let target = event.target;

        if (!target.closest('.dropdown')) {
            setIsActive(false);
            setIsActive2(false);
            setIsActive3(false);
        }
    });

    // search select 1
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
    ];

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.custom-select')) return;
            handleBlur();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // search select 2
    const [isOpen2, setIsOpen2] = useState(false);

    const handleBlur2 = () => {
        setTimeout(() => {
            setIsOpen2(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.custom-select2')) return;
            handleBlur2();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // select 3
    const [search3, setSearch3] = useState('');
    const [isOpen3, setIsOpen3] = useState(false);
    const [selected3Options, setSelected3Options] = useState([]);

    const items3 = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
    ];

    const filteredItems3 = items3.filter((item) =>
        item.name.toLowerCase().includes(search3.toLowerCase())
    );

    const isSelected3 = (item) => {
        return selected3Options.some((selectedItem) => selectedItem.id === item.id);
    };

    const toggleSelection3 = (item) => {
        if (isSelected3(item)) {
            setSelected3Options(
                selected3Options.filter((selectedItem) => selectedItem.id !== item.id)
            );
        } else {
            setSelected3Options([...selected3Options, item]);
        }
    };

    const handleBlur3 = () => {
        setTimeout(() => {
            setIsOpen3(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.custom-select3')) return;
            handleBlur3();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // search select 4
    const [search4, setSearch4] = useState('');
    const [isOpen4, setIsOpen4] = useState(false);
    const [selected4Option, setSelected4Option] = useState(null);

    const items4 = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
    ];

    const filteredItems4 = items4.filter((item) =>
        item.name.toLowerCase().includes(search4.toLowerCase())
    );

    const isSelected4 = (item) => {
        return selected4Option?.id === item.id;
    };

    const removeOption4 = () => {
        setSelected4Option(null);
    };

    const toggleSelection4 = (item) => {
        setSelected4Option(item);
    };

    const handleBlur4 = () => {
        setTimeout(() => {
            setIsOpen4(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.custom-select4')) return;
            handleBlur4();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // search select 5
    const [search5, setSearch5] = useState('');
    const [isOpen5, setIsOpen5] = useState(false);
    const [selected5Option, setSelected5Option] = useState(null);

    const items5 = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
    ];

    const filteredItems5 = items5.filter((item) =>
        item.name.toLowerCase().includes(search5.toLowerCase())
    );

    const isSelected5 = (item) => {
        return selected5Option?.id === item.id;
    };

    const removeOption5 = () => {
        setSelected5Option(null);
    };

    const toggleSelection5 = (item) => {
        setSelected5Option(item);
    };

    const handleBlur5 = () => {
        setTimeout(() => {
            setIsOpen5(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.custom-select5')) return;
            handleBlur5();
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // select 6
    const [search6, setSearch6] = useState('');
    const [isOpen6, setIsOpen6] = useState(false);
    const [selected6Options, setSelected6Options] = useState([]);

    const items6 = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
    ];

    const filteredItems6 = items6.filter((item) =>
        item.name.toLowerCase().includes(search6.toLowerCase())
    );

    const isSelected6 = (item) => {
        return selected6Options.some((selectedItem) => selectedItem.id === item.id);
    };

    const toggleSelection6 = (item) => {
        if (isSelected6(item)) {
            setSelected6Options(
                selected6Options.filter((selectedItem) => selectedItem.id !== item.id)
            );
        } else {
            setSelected6Options([...selected6Options, item]);
        }
    };

    const removeOption6 = (option) => {
        setSelected6Options(
            selected6Options.filter((selectedItem) => selectedItem.id !== option.id)
        );
    };

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.custom-select')) {
                setIsOpen6(false);
            }
        });
    }, [isOpen6]);

    return (
        <div>

        </div>
    );
};

export default MutipleSelectWithSearchAndBadge;
