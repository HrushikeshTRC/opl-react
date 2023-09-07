import { useContext, useEffect } from 'react'
import { MapContext } from '../../MapProvider';
import { ScaleLine } from 'ol/control';
import "./scaleLineControl.css"

const ScaleLineControl = () => {
    const map = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let scaleLineControl = new ScaleLine();

        map.addControl(scaleLineControl);

        return () => {
            map.removeControl(scaleLineControl)
        }
    }, [map]);

    return null;
}

export default ScaleLineControl

