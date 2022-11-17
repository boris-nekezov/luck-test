import React from 'react';
import cn from 'classnames';

import TickIcon from '../../assets/check-solid.svg';
import CrossIcon from '../../assets/cross-solid.svg';

import './breadCrumbs.scss';

export interface BreadCrumbsProps {
  steps: (boolean | null)[];
  currentStep: number;
}

export const BreadCrumbs = (props: BreadCrumbsProps) => {
  const { steps, currentStep } = props;

  return (
    <div className='bread-crumbs bread-crumbs__wrapper'>
      {
        steps.map((succeeded, idx) => {
          const contentClasses = cn('bread-crumbs__step_content', {
            "bread-crumbs__step_content--current": idx === currentStep,
            "bread-crumbs__step_content--succeeded": succeeded === true,
            "bread-crumbs__step_content--failed": succeeded === false,
          });

          return (
            <div key={idx} className='bread-crumbs__step_wrapper'>
              <div className={contentClasses}>
                {succeeded === true && <TickIcon />}
                {succeeded === false && <CrossIcon />}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
