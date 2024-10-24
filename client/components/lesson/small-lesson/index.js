import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SmLesson(props) {
	return (
		<>
			<div
				className={`${styles['CTH-sm-lesson']} d-flex justify-content-between align-items-center mb-2`}
			>
				<div className={`${styles['CTH-time-box']} time-box text-center me-2`}>
					<h4>十月</h4>
					<h5>05</h5>
					<h5>(日)</h5>
				</div>
				<div className={`${styles['CTH-class-box']} class-box text-center`}>
					<h4>蒙布朗蛋糕</h4>
					<h4>NTD 1500</h4>
				</div>
				<button className="btn">
					<FontAwesomeIcon icon={faArrowRight} size="2x" />
				</button>
			</div>
		</>
	);
}
