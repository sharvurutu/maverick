package com.stackroute.maverick.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.maverick.domain.ReportingData;

@Repository
public interface MultiUserActivityRepo extends CrudRepository<ReportingData,Integer>{

}
